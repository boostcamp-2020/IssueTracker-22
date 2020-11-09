import styled from 'styled-components';
import React from 'react';
import renderSearchFilter from './SearchFilter';
import NewIssueButton from './NewIssueButton';
import NavBar from './NavBar';

const ToolButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const renderToolButtons = () => {
  console.log('done?');
  return (
    <ToolButtons>
      {renderSearchFilter()}
      {/* <SearchBar/> */}
      <NavBar/>
      <NewIssueButton />
    </ToolButtons>
  );
};

export default renderToolButtons;
