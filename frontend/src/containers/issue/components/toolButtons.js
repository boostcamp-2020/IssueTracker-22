import styled from 'styled-components';
import React, { Component } from 'react';
import renderSearchFilter from './searchFilter'

const ToolButtons = styled.div`
    display: flex;
    flex-direction: row;
`;

const renderToolButtons = () => {
    console.log("done?")
    return (
        <ToolButtons>
            {renderSearchFilter()}
            {/* <SearchBar/> */}
            {/* <LabelMilestone/> */}
            {/* <NewIssueButton/> */}
        </ToolButtons>
    )

}

export default renderToolButtons;