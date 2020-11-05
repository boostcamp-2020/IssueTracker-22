import styled from 'styled-components';
import React, { Component } from 'react';


const renderToolButtons = () => {
    return (
        <ToolButtons>
            <SearchBar/>
            <LabelandMilestone/>
            <NewIssueButton/>
        </ToolButtons>
    )

}

export default renderToolButtons;