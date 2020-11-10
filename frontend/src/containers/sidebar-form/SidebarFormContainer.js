import React, { useState } from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../constants/selectMenuMode';
import SelectMenuContainer from './SelectMenuContainer';

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  position: relative;
  :hover {
    color: skyblue;
  }
`;

const SidebarTitle = styled.span`
  font-weight: 600;
`;

const GearButton = styled.button`
  all: unset; 
`;

const SelectedItemList = styled.div`
`;

const SelectedItem = styled.div`
  border: 1px solid skyblue;
`;

const SidebarFormContainer = ({ mode, selectedItems, setSelectedItems }) => {
  // console.log(`sidebar form ${mode}`);

  const [label, statusText, selectMenuHeader, url] = mode;
  const [open, setOpen] = useState(false);

  const toggleSelectMenu = () => {
    setOpen(!open);
  };

  const onItemClick = (item) => () => {
    const index = selectedItems.findIndex((val) => val.id === item.id);
    switch (label) {
      case selectMenuMode.Assignees[0]:
      case selectMenuMode.Labels[0]:
        const items = (index === -1) ? [...selectedItems, item] : selectedItems.filter((val) => val.id !== item.id);
        setSelectedItems(items);
        break;
      case selectMenuMode.Milestone[0]:
        const oneItem = (index === -1) ? [item] : [];
        setSelectedItems(oneItem);
        break;
      default: break;
    }
  };

  const selectedItemList = () => {
    if (selectedItems.length === 0) {
      return <div>{statusText}</div>;
    }
    return selectedItems.map((item) => (
      <SelectedItem key={item.id}>{item.id}</SelectedItem>
    ));
  };

  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid lightgray' }}>
      <SidebarHeader>
        <SidebarTitle>{label}</SidebarTitle>
        <GearButton type="button" onClick={toggleSelectMenu}>@</GearButton>
        <SelectMenuContainer
          open={open}
          url={url}
          label={label}
          header={selectMenuHeader}
          onOverlayClick={toggleSelectMenu}
          onItemClick={onItemClick}
        />
      </SidebarHeader>

      <SelectedItemList>
        {selectedItemList()}
      </SelectedItemList>

    </div>
  );
};

export default SidebarFormContainer;
