import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import IssueToolbar from './components/IssueToolbar';
import IssueList from './components/IssueList';
import ToolButtons from './components/ToolButtons';
import useLabels from '../../lib/useLabels';
import useMilestones from '../../lib/useMilestones';
import useIssues from '../../lib/useIssues';

const IssueContainer = styled.div`
    display: flex;
    flex-direction : column;
    max-width: 1280px;
    border: 1px solid #eaecef;
    border-radius: 6px;
`;

const Issue = ({location}) => {

  const parse = ( str ) => {
    let splited = str.replace("?", "").split("&")
    let res = splited.reduce((total, cur, i) => {
      let [key, value] = cur.split("=")
      return total + `${i === 0 ? '' : ','}"${key}":"${value}"`
    }, "")
    return JSON.parse(`{${res}}`)
  }
  const queryString = location.search
  const query = parse(queryString)
  const lables = useLabels();
  const milestones = useMilestones();
  const issues = useIssues(queryString)
  
  return (
    <>
      <ToolButtons labels={lables} milestones={milestones}/>
      <IssueContainer>
        <IssueToolbar issues={issues} query={query}/>
        <IssueList issues={issues}/>
      </IssueContainer>
    </>
  );
};
export default withRouter(Issue);
