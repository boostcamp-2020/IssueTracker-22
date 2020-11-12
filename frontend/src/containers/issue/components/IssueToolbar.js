import React, { useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import { svgOpen, svgCheck } from '../../../assets/svgPath';
import pathUri from '../../../constants/path'
import { parse, construct, changeIsopen} from '../../../lib/query'
import ToolbarModal from '../../../components/ToolbarModal'
import FilterAuthor from '../../../components/FilterAuthor'

const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    background-color: #f6f8fa;
    borderRadius: 6px;
    border: 1px solid #eaecef;
`;

const ToolbarState = styled.div`
    color : ${(props) => props.isClicked > 0 ? "#24292e" : "#586069"};
    fill : ${(props) => props.isClicked > 0 ? "#24292e" : "#586069"};
    font-weight : ${(props) => props.isClicked > 0 ? "900" : "normal"};
    margin : 0px 4px 0px 4px;
    font-size : 14px;
`;

const ToolbarStateWrapper = styled.div`
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
    padding: 0px 16px;
    position : relative;
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

const IssueToolbar = ({issues}) => {
  const history = useHistory()
  const query = parse(useLocation().search)
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
    const [modalVisible, setModalVisible] = useState(false)
    const onModal = () => {setModalVisible(true);console.log(modalVisible)};
    const offModal = () => { setModalVisible(false); };
    return (
      <FilterEL onClick={onModal}>
        {item}
        <span style={dropdownCaret}/>
        {
          modalVisible && <ToolbarModal onClose={offModa1l} children={<a>hi</a>}/>
        }
      </FilterEL>
    )
  })
  }
  const clickHandler = (type) => {
    let queryString = construct(query)
    history.push({
      pathname: pathUri.issue,
      search: changeIsopen(queryString, type)
    })
  }
  const filterItems = ['Author', 'Label', 'Projects', 'MileStones', 'Assignees', 'Sort']
  const [opened, closed] = countOpenIssue()
  const [state, setState] = useState(1)
  useEffect(() => {
    setState(query.isopen === "1" ? 1 : -1)
  })
  return (
    <Toolbar>
      <div style={{ padding: '0px 16px 0px 0px' }}>
        <input type="checkbox" name="issue-checkbox"/>
      </div>
      <ToolbarStateWrapper>
        <ToolbarState isClicked={state} onClick={() => clickHandler("open")}>
          <svg  viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{ margin: '2px 0px 2px 4px' }}>
            {svgOpen}
          </svg>
          <a> {opened} Open</a>
        </ToolbarState>
        <ToolbarState isClicked={state * -1} onClick={() => clickHandler("close")}>
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" style={{ margin : '2px 0px 2px 4px' }}>
            {svgCheck}
          </svg>
          <a> {closed} Close</a>
        </ToolbarState>
      </ToolbarStateWrapper>
      <ToolbarFilter>
        {FilterELList(filterItems)}
      </ToolbarFilter>
    </Toolbar>
  );

}

export default IssueToolbar;
