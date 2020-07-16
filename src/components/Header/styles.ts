import styled from 'styled-components';
import { RiExchangeDollarLine, RiSearchLine } from 'react-icons/ri';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  background-color: #574a97;
  height: 80px;

  a {
    margin-left: 40px;
    height: 60px;

    svg {
      height: 100%;
    }
  }

  form {
    display: flex;
    align-items: center;

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

    button {
      margin: 0 40px 0 20px;
      padding: 8px 15px;
      background-color: #f0f0f5ff;
      font-size: 16px;
      font-weight: bold;
      color: #574a97;
      border: 0;
      border-radius: 10px;
      transition: background 0.2s;

      &:hover {
        background-color: #f0f0f5aa;
      }

      span {
        display: none;
      }
    }
  }

  @media (max-width: 420px) {
    height: 60px;

    a {
      margin-left: 5px;
      height: 50px;
    }

    form {
      button {
        margin: 0 10px 0 20px;
        font-size: 0.1px;

        span {
          display: block;
        }
      }
    }
  }
`;

export const LogoIcon = styled(RiExchangeDollarLine)`
  width: 60px;
  height: 60px;
  color: #f0f0f5;
`;

export const SearchIcon = styled(RiSearchLine)`
  width: 20px;
  height: 20px;
  color: #574a97;
`;
