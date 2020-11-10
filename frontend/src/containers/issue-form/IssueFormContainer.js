import React, { useState } from 'react';
import styled from 'styled-components';
// import CookieHandler from 'js-cookie';
// import { Base64 } from 'js-base64';
import apiUri from '../../constants/api';
import IssueMainForm from './IssueMainForm';
// import Sidebar from '../sidebar-form/Sidebar';
import selectMenuMode from '../../constants/selectMenuMode';
import SidebarFormContainer from '../sidebar-form/SidebarFormContainer';

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Sidebar = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 200px;
  padding: 0 10px;
  font-size: 14px;
  color: #636363;
`;

const IssueForm = () => {
  const [issue, setIssue] = useState({ title: '', description: '' });
  const [assignees, setAssignees] = useState([]);
  const [labels, setLabels] = useState([]);
  const [milestone, setMilestone] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const [milestoneId] = milestone.map((val) => val.id);
    const newIssue = {
      ...issue,
      assignees: assignees.map((val) => val.id),
      labels: labels.map((val) => val.id),
      milestoneId,
    };

    // TODO 1 : validation 체크 후 -> POST apiUri.issues fetch 요청
    console.log(`Handle Submit => POST ${apiUri.issues} :: ${JSON.stringify(newIssue)} \n}`);
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
        <Sidebar>
          <SidebarFormContainer
            mode={selectMenuMode.Assignees}
            selectedItems={assignees}
            setSelectedItems={setAssignees}
          />
          <SidebarFormContainer
            mode={selectMenuMode.Labels}
            selectedItems={labels}
            setSelectedItems={setLabels}
          />
          <SidebarFormContainer
            mode={selectMenuMode.Milestone}
            selectedItems={milestone}
            setSelectedItems={setMilestone}
          />
        </Sidebar>

      </FlexRowBetween>
    </form>
  );
};

export default IssueForm;
