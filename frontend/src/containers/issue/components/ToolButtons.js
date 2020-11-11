import styled from 'styled-components';
import React from 'react';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';

const ToolButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ToolButtons = ({ labels, milestones }) => (
  <ToolButtonWrapper>
    <SearchFilter/>
    <SearchBar/>
    {/* <NavBar labelCount={labels.length} milestoneCount={milestones.length}/> */}
    {/* <NewIssueButton /> */}
  </ToolButtonWrapper>
);

export default ToolButtons;
