import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import renderLabels from './label';

const IssueUpperBox = styled.div`
    a {
        text-decoration:none;
        color: black;
    }
    a:hover {
        text-decoration:none;
        color: blue;
    }
`;

const renderIssueUpperBox = (data) => {
  const href = `/issues/${data.issue.id}`;

  return (
    <IssueUpperBox>
      <Link to={href}>{data.issue.title}</Link>
      {renderLabels(data.issue.issue_labels)}
    </IssueUpperBox>
  );
};

export default renderIssueUpperBox;
