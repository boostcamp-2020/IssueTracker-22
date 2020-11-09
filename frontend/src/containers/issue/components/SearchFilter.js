import styled from 'styled-components';
import React, {useState} from 'react';
import dropdownCaret from '../../../assets/styles/caret';
import Modal from '../../../lib/Modal'
import { svgX } from '../../../assets/svgPath';

const SearchFilter = styled.div`
    position: relative;
    summary::-webkit-details-marker {
        display: none
    }
`;

const FilterItemList = styled.div`
    width: 300px;
    height: auto;
    max-height: 480px;
    margin: 8px 0 16px;
    font-size: 12px;
    border-color: #eaecef;
    border-radius: 6px;
    box-shadow: #eaecef;
`;

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    color: black;
    text-align: left;
    cursor: pointer;
    border: 0;
    border-bottom: 1px solid #eaecef;
`;




const renderSearchFilter = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const items = ['Open issues and pull requests', 'Your issues', 'Your pull issues', 'Everything assinged to you', 'Everything mentioning you'];
  const filterItems = () => items.map((item) => (<FilterItem>{item}</FilterItem>));
  const onModal = () => {setModalVisible(true)}
  const offModal = () => {setModalVisible(false)}

  return (
    <SearchFilter>
      <details className="IssueFilter">
        <summary role="button" onClick={onModal}>
          Filters
          <span style={dropdownCaret}/>
        </summary>
        {
          modalVisible&&<Modal onClose={offModal}>Hello</Modal>
        }
        {/* <div class=".filter-modal" style={FilterModal}> */}
        {/* <FilterItemList>
          <h3>Filter Issues</h3>
          <button type="button" data-toggle-for="IssueFilter" onClick={offModal()}>
            <svg aria-label="Close menu" className="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
              {svgX}
            </svg>
          </button>
          {filterItems()}
        </FilterItemList> */}
        {/* </div> */}
      </details>
    </SearchFilter>
  );
};

export default renderSearchFilter;
