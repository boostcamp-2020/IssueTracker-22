import React, { Component } from 'react';
import IssueHeader from './components/issueHeader'
import IssueList from './components/issueList'

class IssueContainer extends Component {
    render() {
        return (
            <div>
                <IssueHeader/>
                <IssueList/>
            </div>
        )
    }
}

export default IssueContainer;