import React, { useState } from 'react';
import styled from 'styled-components';
import RefreshIcon from '@assets/icon/RefreshIcon';
import { contrastColor } from '@lib/color';
import { Label, Input } from './Form';

const ColorChangingButton = styled.button`
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 6px;
    width: 34px;
    padding: 7px;
    margin-right: 10px;
`;

const FlexContainer = styled.div`
    display: flex;
`;

const ColorPicker = ({ color }) => {
  const [newColor, setNewColor] = useState(color);

  return (
    <Label htmlFor="color">
      Color
      <FlexContainer>
        <ColorChangingButton type="button" color={newColor}>
          <RefreshIcon color={contrastColor(newColor)}/>
        </ColorChangingButton>
        <Input type="text" id="color" />
      </FlexContainer>
    </Label>
  );
};

export default ColorPicker;
