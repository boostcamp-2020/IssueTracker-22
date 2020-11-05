import React, { Component } from 'react';
import styled from 'styled-components';
import { svgOpen, svgCheck } from '../../../assets/svgPath'

const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    background-color: #f6f8fa;
    borderRadius: 6px;
    border: 1px solid #eaecef;
`;

const ToolbarState = styled.div`
    display: flex;
    flex-direction: row;
`;

const ToolbarFilter = styled.div`
    display: flex;
    flex-direction: row;
    flex: auto;
    justify-content: flex-end;
`;

const FilterEL = styled.div`
    padding: 0px 16px
`;

const dropdownCaret = {
    marginLeft : "3px",
    display: "inline-block",
    width: "0",
    height: "0",
    verticalAlign: "middle",
    content: "",
    borderTopStyle: "solid",
    borderTopWidth: "4px",
    borderRight: "4px solid transparent",
    borderBottom: "0 solid transparent",
    borderLeft: "4px solid transparent",
}

class IssueToolbar extends Component {
    render() {
        return (
            <Toolbar>
                <div style={{padding: "0px 16px 0px 0px"}}>
                  <input type="checkbox" name="issue-checkbox"/>
                </div>
                <ToolbarState>
                    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{paddingRight:"8px"}}>
                        {svgOpen}
                    </svg>
                    <a> 2 Open</a>
                        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{paddingRight:"8px", paddingLeft:"8px"}}>
                            {svgCheck}
                        </svg>
                    <a> 0 Close</a>
                </ToolbarState>
                <ToolbarFilter>
                    <FilterEL>
                        Author 
                        <span style={dropdownCaret}/>
                    </FilterEL>
                    <FilterEL>
                        Label
                        <span style={dropdownCaret}/>
                    </FilterEL>
                    <FilterEL>
                        Projects
                        <span style={dropdownCaret}/>
                    </FilterEL>
                    <FilterEL>
                        MileStones
                        <span style={dropdownCaret}/>
                    </FilterEL>
                    <FilterEL>
                        Assignees
                        <span style={dropdownCaret}/>
                    </FilterEL>
                    <FilterEL>
                         Sort
                        <span style={dropdownCaret}/>
                    </FilterEL>
                </ToolbarFilter>
            </Toolbar>
        )
    }
}

export default IssueToolbar