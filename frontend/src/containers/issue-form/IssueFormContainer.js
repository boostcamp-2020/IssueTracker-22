import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '../../constants/api';
import IssueMainForm from './IssueMainForm';
import SidebarFormContainer from '../sidebar-form/SidebarFormContainer';
import selectMenuMode from '../../constants/selectMenuMode';

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const [milestoneId] = milestone.map((val) => val.id);
    const newIssue = {
      ...issue,
      assignees: assignees.map((val) => val.id),
      labels: labels.map((val) => val.id),
      milestone_id: milestoneId,
    };

    const response = await fetch(apiUri.issues, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIssue),
    });

    const { success, content, message } = await response.json();
    if (!success) {
      alert(message);
      return;
    }
    window.location.href = `/#${apiUri.issues}/${content.id}`;
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
