import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LabelLinkButton from './LabelLinkButton';
import MilestoneLinkButton from './MilestoneLinkButton';
import pathUri from '../constants/path';

const Nav = styled.nav`
    margin: 0px 20px;
`;

const NavBar = ({ labelCount, milestoneCount }) => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <LabelLinkButton count={labelCount} active={pathname === pathUri.label}/>
      <MilestoneLinkButton count={milestoneCount} active={pathname === pathUri.milestone}/>
    </Nav>
  );
};

export default NavBar;
