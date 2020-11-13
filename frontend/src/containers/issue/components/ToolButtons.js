import styled from 'styled-components';
import React from 'react';
import NavBar from '@components/NavBar';
import SearchFilter from './SearchFilter';
import SearchBar from './SearchBar';
import NewIssueButton from './NewIssueButton';

const ToolButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const NavBarWrapper = styled.div`
    margin: 0px 15px;
`;

const SearchBox = styled.div`
    display: inline-flex;
    align-items: center;
`;

const ToolButtons = ({ labels, milestones }) => (
  <ToolButtonWrapper>
    <SearchBox>
      <SearchFilter/>
      <SearchBar/>
    </SearchBox>
    <SearchBox>
      <NavBarWrapper>
        <NavBar labelCount={labels.length} milestoneCount={milestones.length}/>
      </NavBarWrapper>
      <NewIssueButton />
    </SearchBox>
  </ToolButtonWrapper>
);

export default ToolButtons;
