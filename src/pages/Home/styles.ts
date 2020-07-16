import styled from 'styled-components';
import { FaSearchDollar } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  height: 460px;
  margin: 40px auto;

  background: #f0f0f5;
  padding: 60px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: center;
  flex: 1;

  h1 {
    font-size: 64px;
    padding: 10px 20px;
    color: #473889;
  }
`;

export const SearchIcon = styled(FaSearchDollar)`
  margin: 0 auto;

  width: 120px;
  height: 120px;
  flex: 1;

  color: #473889;
`;
