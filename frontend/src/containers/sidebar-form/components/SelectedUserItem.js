import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  :hover {
    color: #1A60F5;
  }
`;

const UserNickname = styled.div`
  font-weight: bold;
`;

const SelectedUserItem = ({ user }) => {
  const { id, nickname, profile_url: profileUrl } = user;

  return (
    <Wrapper>
      <ProfileImage profileUrl={profileUrl} nickname={nickname} />
      <UserNickname>{nickname}</UserNickname>
    </Wrapper>
  );
};

export default SelectedUserItem;
