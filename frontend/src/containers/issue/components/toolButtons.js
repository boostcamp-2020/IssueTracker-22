import styled from 'styled-components';
import React from 'react';
import renderSearchFilter from './searchFilter';
import NewIssueButton from './NewIssueButton';

const ToolButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const renderToolButtons = () => {
  console.log('done?');
  return (
    <ToolButtons>
      {renderSearchFilter()}
      {/* <SearchBar/> */}
      {/* <LabelMilestone/> */}
      <NewIssueButton />
    </ToolButtons>
  );
};

export default renderToolButtons;
