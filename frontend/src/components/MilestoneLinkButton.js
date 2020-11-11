import React from 'react';
import LinkButton from './LinkButton';
import pathUri from '../constants/path';
import MilestoneIcon from '../assets/icon/MilestoneIcon';

const MilestoneLinkButton = ({ count, active }) => (
  <LinkButton Icon={MilestoneIcon} text="Milestones" path={pathUri.milestone} count={count} active={active}/>
);

export default MilestoneLinkButton;
