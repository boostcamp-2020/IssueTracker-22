import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import IssueToolbar from './components/IssueToolbar';
import IssueList from './components/IssueList';
import ToolButtons from './components/ToolButtons';
import useLabels from '../../lib/useLabels';
import useMilestones from '../../lib/useMilestones';
import useIssues from '../../lib/useIssues';
import { parse } from '../../lib/query';
import apiUri from '../../constants/api';

const IssueContainer = styled.div`
    display: flex;
    flex-direction : column;
    max-width: 1280px;
    border: 1px solid #eaecef;
    border-radius: 6px;
`;

const Issue = ({ location }) => {
  const lables = useLabels();
  const milestones = useMilestones();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const URL = apiUri.issues + location.search;
    console.log(URL);
    fetch(URL, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          const newIssues = [...res.content.issues];
          setIssues(newIssues);
        }
      });
  }, [location]);

  return (
    <>
      <ToolButtons labels={lables} milestones={milestones}/>
      <IssueContainer>
        <IssueToolbar issues={issues}/>
        <IssueList issues={issues}/>
      </IssueContainer>
    </>
  );
};
export default withRouter(Issue);
