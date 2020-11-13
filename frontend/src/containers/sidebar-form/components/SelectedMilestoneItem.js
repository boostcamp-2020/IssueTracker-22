import React from 'react';
import styled from 'styled-components';
import ProgressBar from '@components/ProgressBar';

const Wrapper = styled.div`
  margin: 8px 0;
`;

const MilestoneTitle = styled.div`
  font-weight: bolder;
`;

const SelectedMilestoneItem = ({ milestone }) => {
  const {
    id, title, description, due_date: dueDate, open_issues: openIssues, closed_issues: closedIssues, progress,
  } = milestone;

  return (
    <Wrapper>
      <ProgressBar percent={progress * 100} />
      <MilestoneTitle>{title}</MilestoneTitle>
    </Wrapper>
  );
};

export default SelectedMilestoneItem;
