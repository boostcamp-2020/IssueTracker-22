import styled from 'styled-components';
import React from 'react';
import renderSearchFilter from './SearchFilter';
import NewIssueButton from './NewIssueButton';
import NavBar from '../../../components/NavBar';

const ToolButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ToolButtons = ({ labels }) => (
  <ToolButtonWrapper>
    {renderSearchFilter()}
    {/* <SearchBar/> */}
    <NavBar labelCount={labels.length}/>
    <NewIssueButton />
  </ToolButtonWrapper>
);

export default ToolButtons;
