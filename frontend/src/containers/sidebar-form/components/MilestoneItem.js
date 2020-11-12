import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  color: #636363;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  :hover {
    background-color: #1A60F5; 
    color: white;
  }
`;

const MilestoneTitle = styled.div`
  font-weight: bolder;
  font-size: 17px;
`;

const MilestoneDueDate = styled.div`
  font-size: 14px;
`;

const formalizeDateString = (dueDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dueDate ? new Date(dueDate).toLocaleString('en-US', options) : 'No due date';
};

const MilestoneItem = ({ milestone }) => {
  const {
    id, title, description, due_date: dueDate, open_issues: openIssues, closed_issues: closedIssues, progress,
  } = milestone;
  const formalizedDueDate = formalizeDateString(dueDate);

  return (
    <Item key={id}>
      <div>
        <MilestoneTitle>{title}</MilestoneTitle>
        <MilestoneDueDate>{formalizedDueDate}</MilestoneDueDate>
      </div>
    </Item>
  );
};

export default MilestoneItem;
