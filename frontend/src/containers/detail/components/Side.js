import React, { useState } from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../../constants/selectMenuMode';
import SidebarFormContainer from '../../sidebar-form/SidebarFormContainer';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    flex: 1 1 0;
    align-items: stretch;
    min-width: 200px;
    padding: 0 10px;
    margin-bottom : auto;
`;

const SideInfo = ({ data }) => {
  const {
    id, issue_assignees, issue_labels, milestone: issue_milestone,
  } = data;

  const init_assignees = issue_assignees.map((item) => item.user);
  const init_labels = issue_labels.map((item) => item.label);
  const init_milestone = issue_milestone === null ? [] : [].concat(issue_milestone);

  const [assignees, setAssignees] = useState(init_assignees);
  const [labels, setLabels] = useState(init_labels);
  const [milestone, setMilestone] = useState(init_milestone);
  return (
    <>
      <FlexContainer>
        <SidebarFormContainer
          mode={selectMenuMode.Assignees}
          selectedItems={assignees}
          setSelectedItems={setAssignees}
          issueId={id}
        />
        <SidebarFormContainer
          mode={selectMenuMode.Labels}
          selectedItems={labels}
          setSelectedItems={setLabels}
          issueId={id}
        />
        <SidebarFormContainer
          mode={selectMenuMode.Milestone}
          selectedItems={milestone}
          setSelectedItems={setMilestone}
          issueId={id}
        />
      </FlexContainer>
    </>
  );
};

export default SideInfo;
