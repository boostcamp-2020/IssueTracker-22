import React from 'react';
import pathUri from '@constants/path';
import MilestoneIcon from '@assets/icon/MilestoneIcon';
import LinkButton from './LinkButton';

const MilestoneLinkButton = ({ count, active }) => (
  <LinkButton Icon={MilestoneIcon} text="Milestones" path={pathUri.milestone} count={count} active={active}/>
);

export default MilestoneLinkButton;
