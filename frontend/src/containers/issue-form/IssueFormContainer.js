import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '../../constants/api';
import CommentEditor from './components/CommentEditor';
import SubmitButton from './components/SubmitButton';
import CancelButton from './components/CancelButton';
import UserProfileContainer from '../user-profile/UserProfileContainer';
import SidebarFormContainer from '../sidebar-form/SidebarFormContainer';
import selectMenuMode from '../../constants/selectMenuMode';

const IssueFormBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  flex: 1 1 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 7px 10px;
  background-color: #FAFAFA;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 18px;
  :focus {
    background-color: white;
    border-color: blue;
    outline: none;
    box-shadow: 0 0 0 3px #B9D9E8;
  }
`;

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const CommentFormWrapper = styled.div`
  flex: 3 3 0;
  min-width: 500px;
  display: flex;
  padding: 0 10px;
`;

const IssueOptionalFormWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 200px;
  padding: 0 10px;
`;

const IssueForm = () => {
  const [issue, setIssue] = useState({ title: '', description: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    // TODO 1 : validation 체크 후 -> POST apiUri.issues fetch 요청
    alert(`Handle Submit => POST ${apiUri.issues} :: ${JSON.stringify(issue)}`);
    // TODO 2 : submit 완료 후 issue 상세 화면으로 이동
  };

  const setIssueTitle = (e) => {
    // setIssue(Object.assign(issue, { title: e.target.value }));
    setIssue({ ...issue, title: e.target.value });
  };

  const setIssueDesc = (e) => {
    setIssue({ ...issue, description: e.target.value });
  };

  const uploadFile = (e) => {
    const { files } = e.target;
    console.log(files);
    // TODO : 파일 업로드 구현
  };

  return (
    <div style={{ padding: '0 3%', backgroundColor: 'white' }}>
      <form onSubmit={submitHandler}>

        <FlexRowBetween>

          <CommentFormWrapper>
            <UserProfileContainer/>

            <IssueFormBox>
              <Input type="text" placeholder="Title" onChange={setIssueTitle} />

              <CommentEditor onChange={setIssueDesc} onFileUpload={uploadFile} />

              <FlexRowBetween>
                <CancelButton path="/#/issues" />
                <SubmitButton onClick={submitHandler} target={issue} />
              </FlexRowBetween>
            </IssueFormBox>
          </CommentFormWrapper>

          <IssueOptionalFormWrapper>
            <SidebarFormContainer mode={selectMenuMode.Assignees} />
            <SidebarFormContainer mode={selectMenuMode.Labels} />
            <SidebarFormContainer mode={selectMenuMode.Milestone} />
          </IssueOptionalFormWrapper>

        </FlexRowBetween>
      </form>
    </div>
  );
};

export default IssueForm;
