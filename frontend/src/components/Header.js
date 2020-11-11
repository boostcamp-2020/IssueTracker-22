import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../assets/icon/GitHubIcon';

const HeaderWrapper = styled.header`
  color: white;
  background-color: #24292e;
  height: 75px;
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 5px;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>
      <IconWrapper>
        <GitHubIcon/>
      </IconWrapper>
      <h2>ISSUES</h2>
    </Title>
  </HeaderWrapper>
);

export default Header;
