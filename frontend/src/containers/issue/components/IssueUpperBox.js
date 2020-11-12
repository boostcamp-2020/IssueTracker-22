import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import Labels from './Label';

const IssueUpperBoxWrapper = styled.div`
    a {
        text-decoration:none;
        color: black;
    }
    a:hover {
        text-decoration:none;
        color: blue;
    }
`;

const IssueUpperBox = ({ issue }) => {
  const href = `/issues/${issue.id}`;

  return (
    <IssueUpperBoxWrapper>
      <Link to={href}>{issue.title}</Link>
      <Labels labels={(issue.issue_labels)}/>
    </IssueUpperBoxWrapper>
  );
};

export default IssueUpperBox;
