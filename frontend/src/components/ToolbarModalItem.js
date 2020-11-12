import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProfileImage from '../containers/sidebar-form/components/ProfileImage';
import CheckIcon from '../assets/icon/CheckIcon';
import apiUri from '../constants/api';
import pathUri from '../constants/path';
import { updateValue, getValue, removeQuery } from '../lib/query';

const ModalItem = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  position: relative;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  :hover {
    background-color: #1A60F5;
    color: white;
  }
`;

const ModalItemWrapper = styled.div`
display: flex;
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  right: 92%;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const ToolbarModalItem = ({
  type, identifier, item, switchModal,
}) => {
  const location = useLocation();
  const history = useHistory();
  const selected = getValue(location.search, type);
  const value = item[identifier];
  const visible = value === selected;
  const onClick = () => {
    const queryString = location.search;
    if (!visible) {
      const search = updateValue(queryString, type, value);
      history.push({
        pathname: pathUri.issue,
        search,
      });
    } else {
      const search = removeQuery(queryString, type, value);
      history.push({
        pathname: pathUri.issue,
        search,
      });
    }
    switchModal();
  };

  return (
    <ModalItem onClick={onClick}>
      <CheckIconWrapper visible={visible}>
        <CheckIcon/>
      </CheckIconWrapper>
      <ModalItemWrapper>
        <div>{value}</div>
      </ModalItemWrapper>
    </ModalItem>
  );
};

export default ToolbarModalItem;
