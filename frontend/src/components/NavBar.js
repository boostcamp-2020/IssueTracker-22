import React from 'react';
import styled from 'styled-components';
import LabelLinkButton from './LabelLinkButton';
import MilestoneLinkButton from './MilestoneLinkButton';

const Nav = styled.nav`
    margin: 0px 20px;
`;

const NavBar = ({ labelCount, milestoneCount }) => (
  <Nav>
    <LabelLinkButton count={labelCount}/>
    <MilestoneLinkButton count={2}/>
  </Nav>
);

export default NavBar;
