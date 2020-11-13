import React, { Component, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IssueBox from './IssueBox';
import IssueLowerBox from './IssueLowerBox';
import IssueUpperBox from './IssueUpperBox';
import IssueAssignee from './IssueAssignee';
// import IssueMilestone from './issueMilestone';
import { svgOpen, svgClose } from '../../../assets/svgPath';
import { parse } from '../../../lib/query';

const IssueInfo = ({ issue }) => {
  const drawSVG = (issue) => {
    if (issue.is_open > 0) {
      return (
        <svg style={{ fill: '#22863A' }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
          {svgOpen}
        </svg>
      );
    }
    return (
      <svg style={{ fill: 'red' }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        {svgClose}
      </svg>
    );
  };
  return (
    <IssueBox id={issue.id}>
      <div style={{ padding: '8px 0px 8px 16px' }}>
        <input type="checkbox" name="issue-checkbox"/>
      </div>
      <div style={{ padding: '8px 0px 0px 16px' }}>
        {drawSVG(issue)}
      </div>
      <div className="Issue-ContentBox" style={{ padding: '8px' }}>
        <IssueUpperBox issue={issue}/>
        <IssueLowerBox issue={issue}/>
      </div>
      <IssueAssignee>
        {issue.issue_assignees.map((assignee) => (<img src={assignee.user.profile_url} style={{ width: '20px', height: '20px', borderRadius: '70%' }}/>))}
      </IssueAssignee>
    </IssueBox>
  );
};

const IssueList = ({ issues }) => {
  const query = parse(useLocation().search);
  const Issues = (data, openState) => data.map((issue) => {
    if (issue.is_open === openState) {
      return (<IssueInfo issue={issue}/>);
    }
  });
  const [state, setState] = useState(1);
  useEffect(() => {
    setState(query.isopen === '1' ? 1 : 0);
  });
  return (
    <div>
      {Issues(issues, state)}
    </div>
  );
};

export default IssueList;
