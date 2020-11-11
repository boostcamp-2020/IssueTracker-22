import React from 'react';
import styled from 'styled-components';
// import apiUri from '../../constants/api';

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
`;

// TODO: user data를 받아 src 및 alt 설정
// eslint-disable-next-line arrow-body-style
const UserProfileContainer = ({ user }) => {
  const {
    id, email, nickname, profile_url,
  } = user;
  return (
    <>
      <a href="/#/">
        <ProfileImage src={profile_url} alt={`@${nickname}`} />
      </a>
    </>
  );
};

export default UserProfileContainer;
