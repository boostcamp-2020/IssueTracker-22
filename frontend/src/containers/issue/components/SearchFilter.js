import styled from 'styled-components';
import React, { useState } from 'react';
import dropdownCaret from '../../../assets/styles/caret';
import { svgX } from '../../../assets/svgPath';
import Modal from '../../../components/Modal'

const SearchFilterWrapper = styled.div`
    position: relative;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    max-width: 75px;
    width: auto;
    background-color : #fafbfc;
    border: 1px solid #c5c8cc;
    border-radius: 6px 0px 0px 6px;
    vertical-align: middle;
    padding: 5px 16px;
    summary::-webkit-details-marker {
        display: none
    }
    *:focus{
      outline:none;
    }
`;

const FirstEl = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 7px 16px;
    overflow: hidden;
    color: black;
    text-align: left;
    cursor: pointer;
    border: 0;
    border-bottom: 1px solid #eaecef;
`;

const closeButton = {
  padding: '16px',
  margin: '-16px',
  lineHeight: '1',
  backgroundColor: 'transparent',
  border: '0',

};

const filterItems = (closeFunc, items, refs) => (
  <>
    <FirstEl>
      <FilterItem>Filter Issues</FilterItem>
      <button style={closeButton} type="button" data-toggle-for="IssueFilter" onClick={closeFunc}>
        <svg aria-label="Close menu" className="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
          {svgX}
        </svg>
      </button>
    </FirstEl>
    {items.map((item, i) => (<FilterItem>{item}</FilterItem>))}
  </>
);

const SearchFilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['Open issues and pull requests', 'Your issues', 'Your pull issues', 'Everything assinged to you', 'Everything mentioning you'];
  const refs = ['/issues?isopen=1', '/issues?isopen=1', '/issues?isopen=1', '/issues?isopen=1', '/issues?isopen=1'];
  const onModal = () => { setModalVisible(true); };
  const offModal = () => { setModalVisible(false); };

  return (
    <SearchFilterWrapper>
      <details className="IssueFilter">
        <summary role="button" onClick={onModal} >
          Filters
          <span style={dropdownCaret}/>
        </summary>
        {
          modalVisible && <Modal children={filterItems(offModal, items, refs)} />
        }
      </details>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;
