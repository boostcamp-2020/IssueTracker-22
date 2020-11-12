import styled from 'styled-components';
import React from 'react';
import NavBar from '@components/NavBar';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';
import NewIssueButton from './NewIssueButton';

const ToolButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ToolButtons = ({ labels, milestones }) => (
  <ToolButtonWrapper>
    <SearchFilter/>
    <SearchBar/>
    <NavBar labelCount={labels.length} milestoneCount={milestones.length}/>
    <NewIssueButton />
  </ToolButtonWrapper>
);

export default ToolButtons;
