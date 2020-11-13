import styled from 'styled-components';
import React from 'react';
import IssueLabel from '@components/IssueLabel';

const LabelWrapper = styled.span`
   margin: 0px 3px;
`;

const Labels = ({ labels }) => labels.map(({ label }) => (<LabelWrapper><IssueLabel name={label.name} color={label.color_code}/></LabelWrapper>));

export default Labels;
