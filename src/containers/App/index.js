import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Tag from '../../components/Tag';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Modal, { ModalHeader, ModalContent } from '../../components/Modal';
import styled from 'styled-components';
import axios from 'axios';
import qString from 'query-string';

const AppWrapper = styled.div`
  .top-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .arrow {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin: 12px;
    }
    & > :first-child {
        width: 200px;
    }
    & > :last-child {
        width: 200px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      & > :first-child {
        margin-bottom: 8px;
      }
      .arrow {
        display: none;
      }
    }
  }
  .modal-trigger {
    width: 200px;
    margin: 100px
  }
  .transfer-btn {
      margin-top: 24px;
    }
  .GLOBAL-SELECT {
    margin-top: 16px;
  }
  .GLOBAL-INPUT {
    margin-top: 16px;
  }
`;

const currencyOptions = [
  {
    label: "Tether USD", value: "usdt"
  },
  {
    label: "Bitcoin", value: "btc"
  },
  {
    label: "Ripple", value: "xrp"
  },
  {
    label: "Litecoin", value: "ltc"
  }
]

const App = () => {
  const [openModal, toogleModal] = useState(false);
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [amount, setAmount] = useState();

  const transferToBinance = () => {
    const reqPayload = {
      amount,
      currency: currency.value
    }
    axios.post('https://wazirx-transfers-d7ta793lwrm1.runkit.sh/transfers', qString.stringify(reqPayload), {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    }).then((res) => {
      console.log('>>>', res)
    });
  };

  return (
    <AppWrapper>
      <Button className="modal-trigger" onClick={() => toogleModal(true)}>Modal Trigger</Button>
      <Modal open={openModal}>
        <ModalHeader>
          Transfer to Binance
        </ModalHeader>
        <ModalContent>
          <div className="top-section">
            <div>
              <Tag
                preLabel="FROM"
                icon="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/wazirx-logo.svg"
                label="WazirX"
              />
            </div>
            <img src="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/arrow.svg" className="arrow" alt="arrow" />
            <div>
              <Tag
                preLabel="TO"
                icon="https://s3.amazonaws.com/p-wazirx.cfstage.com/temp/binance-logo.svg"
                label="Binance"
              />
            </div>
          </div>
          <Select
            options={currencyOptions}
            onChange={(value) => setCurrency(value)}
          />
          <Input
            label="AMOUNT"
            onChange={(value) => {
              setAmount(value)
            }}
          />
          <Button onClick={transferToBinance} className="transfer-btn">
            TRANSFER TO BINANCE
            </Button>
        </ModalContent>
      </Modal>
    </AppWrapper>
  )
};

export default App;
