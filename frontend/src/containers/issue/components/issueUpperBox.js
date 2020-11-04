import styled from 'styled-components';
import React, { Component } from 'react';
import renderLabels from './label'

const IssueUpperBox = styled.div`
    `;

const renderIssueUpperBox = (data) => {
    return (<IssueUpperBox>
        <a>{data.issue.title}</a>
        {renderLabels(data.issue.issue_labels)}
    </IssueUpperBox>);
}

export default renderIssueUpperBox;