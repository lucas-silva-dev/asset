import styled from 'styled-components';
import { MdError } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: 310px;
  margin: 60px auto;

  background: #f0f0f5;
  /* background: #f64c75; */
  padding: 60px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  div {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
      font-size: 48px;
      color: #f64c75;
    }
  }

  h2 {
    font-size: 32px;
    padding: 10px 20px;
    color: #f64c75;
  }

  @media (max-width: 420px) {
    margin: 40px auto;

    width: 340px;
    height: 220px;
    padding: 10px;

    div {
      h1 {
        font-size: 32px;
        padding: 4px;
      }

      svg {
        margin-left: 5px;
        width: 30px;
        height: 30px;
      }
    }

    h2 {
      font-size: 28px;
      padding: 5px 10px;
    }
  }
`;

export const ErrorIcon = styled(MdError)`
  margin-left: 10px;

  width: 50px;
  height: 50px;
  color: #f64c75;
`;
