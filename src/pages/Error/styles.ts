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
      color: #473889;
      color: #f64c75;
    }
  }

  h2 {
    font-size: 32px;
    padding: 10px 20px;
    color: #473889;
    color: #f64c75;
  }
`;

export const ErrorIcon = styled(MdError)`
  margin-left: 10px;

  width: 50px;
  height: 50px;
  color: #f64c75;
`;
