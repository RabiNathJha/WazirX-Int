import React from 'react';
import styled from 'styled-components';

const TagBase = styled.div`
  padding: 12px 16px;
  background-color: grey;
  border-radius: 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  .label {
    font-weight: bold;
    font-size: 16px;
    margin-left: 8px;
  }
  .mobile-label {
    display: none;
    width: 60px;
  }
  @media (max-width: 768px) {
    .mobile-label {
    display: inline;
    font-weight: bold;
    margin-right: 8px;
    opacity: 0.5
  }
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Tag = ({ icon, label, preLabel }) => {
  return (
    <TagBase>
      <div className="mobile-label">
        {preLabel}
      </div>
      <Img src={icon} />
      <span className="label">{label}</span>
    </TagBase>
  );
}

export default Tag;
