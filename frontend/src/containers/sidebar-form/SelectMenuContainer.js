import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../../lib/useFetch';
import SelectMenuList from './components/SelectMenuList';

const SelectMenu = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  color: black;
  overflow: hidden; 
  z-index: 10;
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 140%;
  right: 0;
`;

const SelectMenuHeader = styled.div`
  background-color: #FAFAFA;
  border-bottom: 1px solid lightgray;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
`;

const Overlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const SelectMenuContainer = ({ open, url, label, header, onOverlayClick, onItemClick, selectedItems, id }) => {
  const [items, setItems] = useState({});
  const loading = useFetch(setItems, url);
  const issueId = id ? id : null
  return (
    <>
      <Overlay open={open} onClick={onOverlayClick}/>
      <SelectMenu open={open}>
        <SelectMenuHeader>
          {header}
        </SelectMenuHeader>
        <SelectMenuList
          items={items}
          loading={loading}
          label={label}
          onItemClick={onItemClick}
          selectedItems={selectedItems}
          id={issueId}
        />
      </SelectMenu>
    </>
  );
};

export default SelectMenuContainer;
