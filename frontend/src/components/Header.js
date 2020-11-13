import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GitHubIcon from '@assets/icon/GitHubIcon';
import pathUri from '@constants/path';

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

const StyledLink = styled(Link)`
  &:visited  {
    color: white;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Title>
      <IconWrapper>
        <GitHubIcon/>
      </IconWrapper>
      <StyledLink to={pathUri.issue}>
        <h2>ISSUES</h2>
      </StyledLink>
    </Title>
  </HeaderWrapper>
);

export default Header;
