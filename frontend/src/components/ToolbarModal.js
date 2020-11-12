import styled from 'styled-components';
import React, {useState} from 'react';
import ToolbarModalItemContainer from './ToolbarModalItemContainer'


const ToolbarModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  :hover {
    color: skyblue;
  }
`;

const ToolbarModalTitle = styled.span`
  font-weight: 600;
`;

const GearButton = styled.button`
  all: unset; 
`;

const SelectedItemList = styled.div`
  font-size: 13px;
`;

const ToolbarModal = ({
  mode, switchModal
}) => {
  const [label, identifier, selectMenuHeader, url] = mode;
  const [open, setOpen] = useState(true)
  const toggleSelectMenu = () => {
    setOpen(!open)
  }
  return (
      <ToolbarModalHeader>
        <ToolbarModalItemContainer open={open} identifier={identifier} url={url} label={label} header={selectMenuHeader} onOverlayClick={toggleSelectMenu} switchModal={switchModal}/>
      </ToolbarModalHeader>
    
  );
};

export default ToolbarModal;
