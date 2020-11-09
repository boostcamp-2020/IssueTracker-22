import React from 'react';
import LinkButton from './LinkButton';
import pathUri from '../constants/path';
import LabelIcon from '../assets/icon/LabelIcon';

const LabelLinkButton = ({ count }) => (
  <LinkButton Icon={LabelIcon} text="Labels" path={pathUri.label} count={count}/>
);

export default LabelLinkButton;
