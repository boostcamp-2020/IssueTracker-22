import React, { Component } from 'react';
import Label from './label'
import IssueBox from './issueBox'
import IssueLowerBox from './issueLowerBox'
import getRelativeTime from '../../../lib/relativeTime'
import IssueUpperBox from './issueUpperBox';
import IssueAssignee from './issueAssignee';
import IssueMilestone from './issueMilestone';

class IssueInfo extends Component {
    render() {
        const labels = (labels) => {
            return labels.map((label, i)=>{
                return (<Label style={{backgroundColor:"lightblue"}}>{label.label.name}</Label>);
            });
        };
        const id = this.props.issue.id
        const opened = `#${id} opened ${getRelativeTime(this.props.issue.updatedAt)}`
        return (
            <IssueBox id={id}>
                <input type="checkbox" name="issue-checkbox" style={{padding: "8px 0px 8px 16px"}}/>
                <div class="Issue-ContentBox" style={{padding:"8px"}}>
                    <IssueUpperBox>
                        <a>{this.props.issue.title}</a>
                        {labels(this.props.issue.issue_labels)}
                    </IssueUpperBox>
                    <IssueLowerBox>
                        <span class="opened-by">
                            {opened}
                        </span>
                    </IssueLowerBox>
                </div>
                <IssueMilestone></IssueMilestone>
                <IssueAssignee></IssueAssignee>
            </IssueBox>
        )
    }
}

class IssueList extends Component {
    constructor(props){
        super(props);
        // this.state = getIssues()
        this.state = {
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
    }
    render() {
        
        const Issues = (data) =>{
            return data.map((issue) => {
                return (<IssueInfo issue={issue}/>);
            });
        };
        return (
            <div>
                {Issues(this.state.content.issues)}
            </div>
        )
    }
}

export default IssueList