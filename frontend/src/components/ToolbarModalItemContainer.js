import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../lib/useFetch';
import ToolbarModalItemList from './ToolbarModalItemList';

const ContainerWrapper = styled.div`
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

const ContainerHeader = styled.div`
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

const ToolbarModalItemContainer = ({
  open, identifier, url, label, header, onOverlayClick, switchModal,
}) => {
  const [items, setItems] = useState({});
  const loading = useFetch(setItems, url);
  // console.log(open, identifier, url, label)
  return (
    <>
      <Overlay open={open} onClick={onOverlayClick}/>
      <ContainerWrapper open={open}>
        <ContainerHeader>{header}</ContainerHeader>
        <ToolbarModalItemList
          items={items}
          identifier={identifier}
          loading={loading}
          label={label}
          switchModal={switchModal}
        />
      </ContainerWrapper>
    </>
  );
};

export default ToolbarModalItemContainer;
