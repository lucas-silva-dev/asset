import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: 360px;
  margin: 60px auto;

  background: #574a97;
  /* background: #f0f0f5; */

  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 64px;
    padding: 10px 20px;
    color: #473889;
    color: #f0f0f5;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;

  strong {
    font-size: 24px;
    color: #473889;
    color: #f0f0f5;
    padding: 6px;
    margin-right: 4px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #473889;
    color: #f0f0f5;
    padding: 6px;
  }
`;
