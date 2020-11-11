import styled from 'styled-components';
import React from 'react';
import NavBar from '@components/NavBar';
import renderSearchFilter from './SearchFilter';
import NewIssueButton from './NewIssueButton';

const ToolButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ToolButtons = ({ labels, milestones }) => (
  <ToolButtonWrapper>
    {renderSearchFilter()}
    {/* <SearchBar/> */}
    <NavBar labelCount={labels.length} milestoneCount={milestones.length}/>
    <NewIssueButton />
  </ToolButtonWrapper>
);

export default ToolButtons;
