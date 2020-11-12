import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../assets/icon/CheckIcon';
import apiUri from '../../../constants/api';
import formalizeDateString from '@lib/formalizeDateString';

const Item = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  position: relative;
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

const CheckIconWrapper = styled.div`
  position: absolute;
  right: 92%;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const formalizeDateString = (dueDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dueDate ? new Date(dueDate).toLocaleString('en-US', options) : 'No due date';
};

const MilestoneItem = ({ milestone, onItemClick, selected, issueId }) => {
  const {
    id, title, description, due_date: dueDate, open_issues: openIssues, closed_issues: closedIssues, progress,
  } = milestone;

  const formalizedDueDate = formalizeDateString(dueDate);

  const [visible, setVisible] = useState(selected);

  const onClick = async () => {
    if(issueId) {
      const mode = visible ? 0 : 1;
      const body = {
        issue_id: issueId,
        milestone_id: id,
        mode: mode,
      }
      const response = await fetch(apiUri.issueUpdate, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const { success, message } = await response.json();
      
      if (!success) {
        alert(message);
        return;
      }

    }


    setVisible(!visible);
    onItemClick(milestone)();
  };

  return (
    <Item onClick={onClick}>
      <CheckIconWrapper visible={visible}>
        <CheckIcon />
      </CheckIconWrapper>
      <div>
        <MilestoneTitle>{title}</MilestoneTitle>
        <MilestoneDueDate>{formalizedDueDate}</MilestoneDueDate>
      </div>
    </Item>
  );
};

export default MilestoneItem;
