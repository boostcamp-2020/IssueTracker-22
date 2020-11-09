import React from 'react';
import styled from 'styled-components';
import LabelLinkButton from '../../../components/LabelLinkButton';
import MilestoneLinkButton from '../../../components/MilestoneLinkButton';

const Nav = styled.nav`
    margin: 0px 20px;
`;

const NavBar = ({ count }) => (
  <Nav>
    <LabelLinkButton count={2}/>
    <MilestoneLinkButton count={2}/>
  </Nav>
);

export default NavBar;
