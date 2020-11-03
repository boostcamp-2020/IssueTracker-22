import React, { Component } from 'react';
import IssueHeader from './components/issueHeader'

class Issue extends Component {
    render() {
        return (
            <div>
                <IssueHeader/>
                <IssueList/>
            </div>
        )
    }
}