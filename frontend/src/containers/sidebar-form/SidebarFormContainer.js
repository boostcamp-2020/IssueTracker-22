import React, { useState } from 'react';
import styled from 'styled-components';
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
`;

const SidebarFormContainer = ({ mode }) => {
  console.log(`sidebar form ${mode}`);

  const [label, statusText, selectMenuHeader, url] = mode;
  const [open, setOpen] = useState(false);

  const toggleSelectMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid lightgray' }}>
      <input type="hidden" value="sidebar" name={label}/>

      <SidebarHeader>
        <SidebarTitle>{label}</SidebarTitle>
        <GearButton type="button" onClick={toggleSelectMenu}>@</GearButton>
        <SelectMenuContainer
          open={open}
          url={url}
          label={label}
          header={selectMenuHeader}
          onOverlayClick={toggleSelectMenu}
        />
      </SidebarHeader>

      <SelectedItemList>
        <div>{statusText}</div>
        {/* <SelectedItem /> */}
      </SelectedItemList>

    </div>
  );
};

export default SidebarFormContainer;
