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
`;

const SelectMenuHeader = styled.div`
  background-color: #FAFAFA;
  border-bottom: 1px solid lightgray;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
`;

const SelectMenuContainer = ({ open, url, label, header }) => {
  const style = {
    display: open ? 'block' : 'none',
    position: 'absolute',
    top: '140%',
    right: '0',
  };

  if (open) {
    const [items, setItems] = useState({});
    const loading = useFetch(setItems, url);

    return (
      <SelectMenu style={style}>
        <SelectMenuHeader>
          {header}
        </SelectMenuHeader>
        <SelectMenuList items={items} loading={loading} label={label} />
      </SelectMenu>
    );
  }
  return (
    <div style={style} />
  );
};

export default SelectMenuContainer;
