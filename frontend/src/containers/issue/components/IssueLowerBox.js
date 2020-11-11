import styled from 'styled-components';
import React from 'react';
import getRelativeTime from '../../../lib/relativeTime';
import { svgMilestone } from '../../../assets/svgPath';

const IssueLowerBox = styled.div`
    font-size: 12px; 
    color: #586069;
    margin: 4px 0px 0px
`;

const renderIssueLowerBox = (issue) => {
  const content = `#${issue.id} opened ${getRelativeTime(issue.updatedAt)}`;
  const milestone = () => {
    if (!issue.milestone) {
      return (<></>);
    }
    return (
      <>
        <svg style={{ marginLeft: '4px' }} viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
          {svgMilestone}
        </svg>
        <a>{issue.milestone.title}</a>
      </>
    );
  };

  return (
    <IssueLowerBox>
      <span className="opened-by">
        {content}
        {milestone()}
      </span>
    </IssueLowerBox>
  );
};

export default renderIssueLowerBox;
