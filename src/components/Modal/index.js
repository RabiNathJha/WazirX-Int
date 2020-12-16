import React from 'react';
import styled from 'styled-components';


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000000;
`;

const ModalBase = styled.div`
  width: 500px;
  height: fit-content;
  box-shadow: 0px 4px 18px black;
  background: white;
  color: black;
  padding-bottom: 24px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const ModalContent = styled.div`
  padding: 16px;
`

export const ModalFooter = styled.div`

`

const Modal = ({ children, open }) => {
  if (!open) return null;
  return (
    <ModalWrapper>
      <ModalBase>
        {children}
      </ModalBase>
    </ModalWrapper>
  );
};

export default Modal;
