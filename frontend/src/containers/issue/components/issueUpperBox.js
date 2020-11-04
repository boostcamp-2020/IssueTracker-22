import styled from 'styled-components';
import React, { Component } from 'react';
import renderLabels from './label'

const IssueUpperBox = styled.div`
        a {
            text-decoration:none;
            color: black;
        }
        a:hover {
            text-decoration:none;
            color: blue;
        }

    `;

const renderIssueUpperBox = (data) => {
    const href = `/issues/${data.issue.id}`
    return (<IssueUpperBox>
        <a href={href}>{data.issue.title}</a>
        {renderLabels(data.issue.issue_labels)}
    </IssueUpperBox>);
}

export default renderIssueUpperBox;