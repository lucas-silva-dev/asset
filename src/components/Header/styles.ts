import styled from 'styled-components';
import { RiExchangeDollarLine } from 'react-icons/ri';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  background-color: #574a97;
  height: 80px;

  img {
    margin-left: 40px;
    height: 60px;
  }

  form {
    input {
      width: 140px;
      background-color: #f0f0f5;
      border: 0;
      border-radius: 10px;
      padding: 9px 15px;
      &::placeholder {
        font-size: 15px;
        color: #473889;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      font-size: 13px;
      margin: -5px 0 10px;
    }

    button {
      margin: 0 40px 0 20px;
      padding: 8px 15px;
      background-color: #f0f0f5ff;
      font-size: 16px;
      font-weight: bold;
      color: #574a97;
      border: 1px solid #574a97;
      border-radius: 10px;
      transition: background 0.2s;
      &:hover {
        background-color: #f0f0f5aa;
      }
    }
  }
`;

export const LogoIcon = styled(RiExchangeDollarLine)`
  margin-left: 40px;

  width: 60px;
  height: 60px;
  color: #f0f0f5;
`;
