import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px 0;
`;

const MilestoneTitle = styled.div`
  font-weight: bolder;
`;

const ProgressBarBase = styled.span`
  display: flex;
  background-color: #E9E9E9;
  border-radius: 2em;
  height: 8px;
  width: 100%;
  margin-bottom: 7px;
  overflow: hidden;
`;

const Progress = styled.span`
  display: block;
  background-color: #28a745;
  width: ${(props) => props.percent}%;
`;

const SelectedMilestoneItem = ({ milestone }) => {
  const {
    id, title, description, due_date: dueDate, open_issues: openIssues, closed_issues: closedIssues, progress,
  } = milestone;

  return (
    <Wrapper>
      <ProgressBarBase>
        <Progress percent={progress * 100} />
      </ProgressBarBase>
      <MilestoneTitle>{title}</MilestoneTitle>
    </Wrapper>
  );
};

export default SelectedMilestoneItem;
