import React from 'react';
import LinkButton from './LinkButton';
import pathUri from '../constants/path';
import MilestoneIcon from '../assets/icon/MilestoneIcon';

const MilestoneLinkButton = ({ count }) => (
  <LinkButton Icon={MilestoneIcon} text="Milestones" path={pathUri.milestone} count={count}/>
);

export default MilestoneLinkButton;
