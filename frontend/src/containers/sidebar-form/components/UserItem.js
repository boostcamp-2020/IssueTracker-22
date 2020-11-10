import React from 'react';
import styled from 'styled-components';
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

const UserItem = ({ user, onClick }) => {
  const { id, nickname, profile_url: profileUrl } = user;

  return (
    <Item onClick={onClick(user)}>
      <UserWrapper>
        <ProfileImage profileUrl={profileUrl} nickname={nickname} />
        <UserNickname>{nickname}</UserNickname>
      </UserWrapper>
    </Item>
  );
};

export default UserItem;
