import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 8px;
`;

const ProfileImage = ({ profileUrl, nickname }) => (
  <Image src={profileUrl} alt={`@${nickname}`} />
);

export default ProfileImage;
