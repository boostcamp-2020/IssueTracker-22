import React, { Component } from 'react';
import IssueToolbar from './components/issueToolbar'
import IssueList from './components/issueList'
import styled from 'styled-components';

const IssueContainer = styled.div`
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: #eaecef;
`;

const dummy = {
    "success": true,
    "content": {
      "issues": [
        {
          "id": 1,
          "title": "bkyo",
          "description": "prac",
          "createdAt": "2020-11-02T15:30:00.000Z",
          "updatedAt": "2020-11-02T15:30:00.000Z",
          "user": {
            "id": 1,
            "nickname": "bk"
          },
          "issue_labels": [
            {
              "id": 1,
              "label": {
                "id": 1,
                "name": "feature",
                "color_code": null
              }
            },
            {
              "id": 3,
              "label": {
                "id": 1,
                "name": "feature",
                "color_code": null
              }
            }
          ],
          "issue_assignees": [
            {
              "id": 1,
              "user": {
                "nickname": "bk"
              }
            }
          ],
          "milestone": null
        },
        {
          "id": 2,
          "title": "bbbk",
          "description": "bbbk",
          "createdAt": "2020-11-03T11:11:11.000Z",
          "updatedAt": "2020-11-03T11:11:11.000Z",
          "user": {
            "id": 1,
            "nickname": "bk"
          },
          "issue_labels": [
            {
              "id": 2,
              "label": {
                "id": 1,
                "name": "feature",
                "color_code": null
              }
            }
          ],
          "issue_assignees": [],
          "milestone": null
        }
      ]
    }
  }

class Issue extends Component {
    render() {
        // const data = getIssues()
        return (
            <IssueContainer>
                <IssueToolbar data={dummy}/>
                <IssueList data={dummy}/>
            </IssueContainer>
        )
    }
}

export default Issue;