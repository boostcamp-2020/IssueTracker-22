import styled from 'styled-components';
import React from 'react';
import SearchFilter from './SearchFilter';
import NewIssueButton from './NewIssueButton';
import SearchBar from './SearchBar';

const ToolButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const renderToolButtons = () => {
  return (
    <ToolButtons>
      {SearchFilter()}
      {SearchBar()}
      {/* <LabelMilestone/> */}
      {/* <NewIssueButton /> */}
    </ToolButtons>
  );
};

export default renderToolButtons;
