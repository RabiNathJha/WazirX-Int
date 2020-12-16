import React from 'react';
import styled from 'styled-components';

const SelectBase = styled.select`
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Select  = ({ options, onChange }) => {
  return (
    <SelectBase onChange={({ target }) => onChange(target.value)} className="GLOBAL-SELECT">
      {options.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
    </SelectBase>
  );
}

export default Select;
