import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '../../constants/api';
import IssueMainForm from './IssueMainForm';
import SidebarFormContainer from '../sidebar-form/SidebarFormContainer';
import selectMenuMode from '../../constants/selectMenuMode';
import imageUploadHandler from '../../lib/imageUploadHandler';

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

const IssueForm = ({ user }) => {
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

  const renderImageTag = async (file) => {
    const { name: imageAlt } = file;
    // const uploadingImageText = `\n\n![Uploading ${imageAlt}...]()\n\n`;
    // const uploadingDescription = issue.description + uploadingImageText;
    // setIssue({ ...issue, description: uploadingDescription });

    try {
      const imageUrl = await imageUploadHandler(file);
      const imageTag = `\n\n<img alt="${imageAlt}" src="${imageUrl}">\n\n`;

      const newDescription = issue.description + imageTag;
      setIssue({ ...issue, description: newDescription });
    } catch (error) {
      alert('failed to upload image');
    }
  };

  const onFileUpload = (e) => {
    const { files } = e.target;
    files.forEach((file) => renderImageTag(file));
  };

  return (
    <form onSubmit={onSubmit}>
      <FlexRowBetween>

        <IssueMainForm
          user={user}
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
