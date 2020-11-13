import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '../../../constants/api';
import CommentEditor from '../../issue-form/components/CommentEditor';
import UserProfileContainer from '../../user-profile/UserProfileContainer';
import ChangeStatusButton from './ChangeStatusButton';
import CommentButton from './CommentButton';
import imageUploadHandler from '../../../lib/imageUploadHandler';

const CreateCommentContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10px;
  margin: 15px 0;
  font-size: 14px;
  color: #24292;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;
const Image = styled.div`
  margin-top:30px;
`;
const Input = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const CreateComment = ({
  data, callback, user, changeStatus,
}) => {
  const [issue, setIssue] = useState({ description: '' });
  const { description } = issue;

  const renderImageTag = async (file) => {
    const { name: imageAlt } = file;
    try {
      const imageUrl = await imageUploadHandler(file);
      const imageTag = `\n\n<img alt="${imageAlt}" src="${imageUrl}">\n\n`;

      const newDescription = issue.description + imageTag;
      setIssue({ ...issue, description: newDescription });
    } catch (error) {
      alert('failed to upload image');
    }
  };
  const uploadFile = (e) => {
    const { files } = e.target;
    files.forEach((file) => renderImageTag(file));
  };

  const setIssueDesc = (e) => {
    setIssue({ ...issue, description: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (user !== null) {
      await fetch(apiUri.comments, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          issue_id: data.id,
          description: issue.description,
        }),
      }).then((res) => {
        callback(issue.description);
        setIssue({ description: '' });
      });
    } else {
      alert('로그인 후 이용 가능합니다.');
    }
  };

  return (
    <>
      <CreateCommentContainer>
        <Image><UserProfileContainer user={user} /></Image>
        <Input>
          <CommentEditor onChange={setIssueDesc} value={description} onFileUpload={uploadFile}/>
          <FlexRowBetween>
            <ChangeStatusButton issue={data} user={user} callback={changeStatus} />
            <CommentButton onClick={submitHandler} target={issue} />
          </FlexRowBetween>
        </Input>
      </CreateCommentContainer>
    </>
  );
};

export default CreateComment;
