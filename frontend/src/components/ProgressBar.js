import React from 'react';
import styled from 'styled-components';

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

const ProgressBar = ({ percent }) => (
  <ProgressBarBase>
    <Progress percent={percent} />
  </ProgressBarBase>
);

export default ProgressBar;
