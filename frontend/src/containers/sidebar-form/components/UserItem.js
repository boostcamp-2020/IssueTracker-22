import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../assets/icon/CheckIcon';
import ProfileImage from './ProfileImage';

const Item = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  :hover {
    background-color: #1A60F5;
    color: white;
  }
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserNickname = styled.div`
  font-weight: bold;
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  right: 92%;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const UserItem = ({ user, onItemClick, selected }) => {
  const { id, nickname, profile_url: profileUrl } = user;

  const [visible, setVisible] = useState(selected);

  const onClick = () => {
    setVisible(!visible);
    onItemClick(user)();
  };

  return (
    <Item onClick={onClick}>
      <CheckIconWrapper visible={visible}>
        <CheckIcon />
      </CheckIconWrapper>
      <UserWrapper>
        <ProfileImage profileUrl={profileUrl} nickname={nickname} />
        <UserNickname>{nickname}</UserNickname>
      </UserWrapper>
    </Item>
  );
};

export default UserItem;
