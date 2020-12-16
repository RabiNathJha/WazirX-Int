import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .label {
    width: 80px;
    color: grey;
    &::after {
      content: "";
      height: 100%;
      width: 2px;
      background-color: black;
    }
  }
  margin-right: 4px;
  border: 1px solid grey;
`;

const InputBase = styled.input`
  outline: none;
  border: 0px;
  font-weight: bold;
  width: 100%;
  border-left: 2px solid grey;
  margin-left: 4px;
`;

const Input = ({ onChange, label }) => {
  const [value, setValue] = useState('');
  useEffect(() => { onChange(value) }, [value]) 
  return (
    <InputWrapper className="GLOBAL-INPUT">
      <div className="label">
        {label}
      </div>
      <InputBase value={value} type="number" name="" onChange={({ target: { value } }) => setValue(value)} />
    </InputWrapper>
  );
}

export default Input;
