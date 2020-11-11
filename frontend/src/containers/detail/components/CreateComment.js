import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '../../../constants/api';
import CommentEditor from '../../issue-form/components/CommentEditor';
import UserProfileContainer from '../../user-profile/UserProfileContainer';
import ChangeStatusButton from './ChangeStatusButton';
import CommentButton from './CommentButton';

const CreateCommentContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px;
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

const uploadFile = (e) => {
  const { files } = e.target;
  // TODO : 파일 업로드 구현
};

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const CreateComment = ({ data, callback }) => {
  // url: 현재 로그인한 유저의 이미지 url
  const url = "https://avatars2.githubusercontent.com/u/39620410?v=4"
  const name = "rlaqudrnr810"
  const [issue, setIssue] = useState({ description: '', });
  const { description } = issue;

  const setIssueDesc = (e) => {
    setIssue({ ...issue, description: e.target.value });
  };

  const submitHandler = async (e) => {
      e.preventDefault();
    
    await fetch(apiUri.comments, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        issue_id: data.id,
        description: issue.description,
      }),
    }).then(res => {
      callback(issue.description);
      setIssue({description: '' });
    });
    
  };
  return <>
    <CreateCommentContainer>
      <Image><UserProfileContainer url={url} name={name} /></Image>
      <Input>
        <CommentEditor onChange={setIssueDesc} value={description} onFileUpload={uploadFile}/>
        <FlexRowBetween>
          <ChangeStatusButton issue={data} />
          <CommentButton onClick={submitHandler} target={issue} />
        </FlexRowBetween>
      </Input>
    </CreateCommentContainer>
  </>;
};

export default CreateComment;
