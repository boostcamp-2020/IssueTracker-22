import React, { Component } from 'react';
import IssueToolbar from './components/issueToolbar'
import IssueList from './components/issueList'
import styled from 'styled-components';

const IssueContainer = styled.div`
    max-width: 1280px;
    border: 1px solid #eaecef;
    border-radius: 6px;
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
          "milestone": 1
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