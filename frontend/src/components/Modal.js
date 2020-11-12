import styled from 'styled-components';
import React from 'react';

const ModalItemList = styled.div`
width: 300px;
height: auto;
position: absolute;
max-height: 480px;
margin: 8px 0 16px;
font-size: 12px;
top: 78%;
left: 0%;
background-color: white;
border-color: #eaecef;
border-radius: 6px;
border: 1px solid #eaecef;
z-index: 999;
`;

const Modal = ({
  className, onClose, visible, children,
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalItemList className={className} onClick={onMaskClick} tabIndex="-1" visible={visible}>
        {children}
      </ModalItemList>
    </>
  );
};

export default Modal;
