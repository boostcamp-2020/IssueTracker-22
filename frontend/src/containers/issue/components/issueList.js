import React, { Component } from 'react';
import IssueBox from './issueBox'
import renderIssueLowerBox from './issueLowerBox'
import renderIssueUpperBox from './issueUpperBox';
import IssueAssignee from './issueAssignee';
// import IssueMilestone from './issueMilestone';
import { svgOpen } from '../../../assets/svgPath'

class IssueInfo extends Component {
    render() {
        const id = this.props.issue.id
        return (
            <IssueBox id={id}>
                <div style={{padding: "8px 0px 8px 16px"}}>
                  <input type="checkbox" name="issue-checkbox"/>
                </div>
                <div style={{padding: "8px 0px 0px 16px"}}>
                  <svg style={{fill:"#22863A"}} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    {svgOpen}
                  </svg>
                </div>
                <div class="Issue-ContentBox" style={{padding:"8px"}}>
                    {renderIssueUpperBox(this.props)}
                    {renderIssueLowerBox(this.props.issue)}
                </div>
                <IssueAssignee>
                  <img src="https://user-images.githubusercontent.com/48170519/90837801-0cede580-e38e-11ea-9b72-77c621e0f0fc.PNG"
                  style={{width:"20px", height:"20px", borderRadius:"70%"}}/>
                </IssueAssignee>
            </IssueBox>
        )
    }
}

class IssueList extends Component {
    constructor(props){
        super(props);
        this.state = this.props.data
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

