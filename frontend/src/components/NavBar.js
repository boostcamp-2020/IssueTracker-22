import React from 'react';
import { useLocation } from 'react-router-dom';
import pathUri from '@constants/path';
import LabelLinkButton from './LabelLinkButton';
import MilestoneLinkButton from './MilestoneLinkButton';

const NavBar = ({ labelCount, milestoneCount }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <LabelLinkButton count={labelCount} active={pathname === pathUri.label}/>
      <MilestoneLinkButton count={milestoneCount} active={pathname === pathUri.milestone}/>
    </nav>
  );
};

export default NavBar;
