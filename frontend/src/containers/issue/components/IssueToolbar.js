import React, { useState } from 'react';
import styled from 'styled-components';
import useIssues from '../../../lib/useIssues';
import { svgOpen, svgCheck } from '../../../assets/svgPath';

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
  marginLeft: '3px',
  display: 'inline-block',
  width: '0',
  height: '0',
  verticalAlign: 'middle',
  content: '',
  borderTopStyle: 'solid',
  borderTopWidth: '4px',
  borderRight: '4px solid transparent',
  borderBottom: '0 solid transparent',
  borderLeft: '4px solid transparent',
};

const IssueToolbar = ({issues, query}) => {
  console.log(query)
  const countOpenIssue = () => {
    if(issues.length > 0) {
      let open = 0
      let close = 0
      issues.forEach( issue => {
        if(issue.is_open > 0) open++;
        else close++;
      })
      return [open, close]
    } else return [0, 0]
  }
  const FilterELList = (items) => { return items.map(item => {
    return (
      <FilterEL>
        {item}
        <span style={dropdownCaret}/>
      </FilterEL>
    )
  })
  }
  const filterItems = ['Author', 'Label', 'Projects', 'MileStones', 'Assignees', 'Sort']
  const [opened, closed] = countOpenIssue()
  return (
    <Toolbar>
      <div style={{ padding: '0px 16px 0px 0px' }}>
        <input type="checkbox" name="issue-checkbox"/>
      </div>
      <ToolbarState>
        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{ margin: '2px 4px 2px 4px' }}>
          {svgOpen}
        </svg>
        <a> {opened} Open</a>
        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{ margin : '2px 4px 2px 4px' }}>
          {svgCheck}
        </svg>
        <a> {closed} Close</a>
      </ToolbarState>
      <ToolbarFilter>
        {FilterELList(filterItems)}
      </ToolbarFilter>
    </Toolbar>
  );

}

export default IssueToolbar;
