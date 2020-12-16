// import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button.attrs(({ className }) => ({
  className: className || 'GLOBAL-BUTTON'
}))`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  background: blue;
  color: white;
  border: 0px;
  border-radius: 4px;
`;

export default ButtonBase;
