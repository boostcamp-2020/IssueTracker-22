import React, { Component } from 'react';
import IssueHeader from './components/issueHeader'
import IssueList from './components/issueList'
import styled from 'styled-components';

const IssueContainer = styled.div`
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: #eaecef;
`;


class Issue extends Component {
    render() {
        return (
            <IssueContainer>
                <IssueHeader/>
                <IssueList/>
            </IssueContainer>
        )
    }
}

export default Issue;