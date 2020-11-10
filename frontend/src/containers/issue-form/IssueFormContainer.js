import React, { useState } from 'react';
import styled from 'styled-components';
// import CookieHandler from 'js-cookie';
// import { Base64 } from 'js-base64';
import apiUri from '../../constants/api';
import IssueMainForm from './IssueMainForm';
import Sidebar from '../sidebar-form/Sidebar';

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const IssueForm = () => {
  const [issue, setIssue] = useState({
    title: '', description: '', assignees: [], labels: [], milestoneId: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO 1 : validation 체크 후 -> POST apiUri.issues fetch 요청
    alert(`Handle Submit => POST ${apiUri.issues} :: ${JSON.stringify(issue)} \n}`);
    // TODO 2 : submit 완료 후 issue 상세 화면으로 이동
  };

  const onChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const onFileUpload = (e) => {
    const { files } = e.target;
    // TODO : 파일 업로드 구현
    console.log(files);
  };

  return (
    <form onSubmit={onSubmit}>
      <FlexRowBetween>

        <IssueMainForm
          onChange={onChange}
          onFileUpload={onFileUpload}
          onSubmit={onSubmit}
          issue={issue}
        />
        <Sidebar />

      </FlexRowBetween>
    </form>
  );
};

export default IssueForm;
