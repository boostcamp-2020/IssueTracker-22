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
const UserProfileContainer = () => {
  return (
    <>
      <a href="/#/">
        <ProfileImage src="https://avatars1.githubusercontent.com/u/57661699?s=80&amp;v=4" alt="@caribouuuu" />
      </a>
    </>
  );
};

export default UserProfileContainer;
