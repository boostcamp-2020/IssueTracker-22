import React from 'react';
import pathUri from '@constants/path';
import LabelIcon from '@assets/icon/LabelIcon';
import LinkButton from './LinkButton';

const LabelLinkButton = ({ count, active }) => (
  <LinkButton Icon={LabelIcon} text="Labels" path={pathUri.label} count={count} active={active}/>
);

export default LabelLinkButton;
