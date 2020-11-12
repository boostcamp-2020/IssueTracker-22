import React from 'react';
import styled from 'styled-components';
import { contrastColor } from '@lib/color';

const Label = styled.div`
    background-color: ${(props) => props.color};
    color: ${(props) => contrastColor(props.color)};
    display: inline-block;
    padding: 2px 10px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 2em; 
`;

const IssueLabel = ({ name, color }) => <Label color={color}>{name}</Label>;

export default IssueLabel;
