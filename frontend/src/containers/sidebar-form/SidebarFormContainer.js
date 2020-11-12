import React, { useState } from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../constants/selectMenuMode';
import SelectedLabelItem from './components/SelectedLabelItem';
import SelectedUserItem from './components/SelectedUserItem';
import SelectedMilestoneItem from './components/SelectedMilestoneItem';
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
  font-size: 13px;
`;

const SidebarFormContainer = ({ mode, selectedItems, setSelectedItems, issueId }) => {
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
    switch (label) {
      case selectMenuMode.Assignees[0]:
        return selectedItems.map((item) => (
          <SelectedUserItem key={item.id} user={item} />
        ));
      case selectMenuMode.Labels[0]:
        return selectedItems.map((item) => (
          <SelectedLabelItem key={item.id} label={item} />
        ));
      case selectMenuMode.Milestone[0]:
        return selectedItems.map((item) => (
          <SelectedMilestoneItem key={item.id} milestone={item} />
        ));
      default:
        return <div />;
    }
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
          selectedItems={selectedItems}
          id={issueId}
        />
      </SidebarHeader>

      <SelectedItemList>
        {selectedItemList()}
      </SelectedItemList>

    </div>
  );
};

export default SidebarFormContainer;
