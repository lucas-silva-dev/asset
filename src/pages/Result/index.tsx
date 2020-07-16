import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Content } from './styles';

interface StockData {
  latestPrice: number;
  companyName: string;
  primaryExchange: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const stocks = location.state as StockData;

  const [quote, setQuote] = useState<StockData>({} as StockData);

  useEffect(() => {
    setQuote(stocks);
  }, [stocks]);

  return (
    <Container>
      <h1>{quote.companyName}</h1>

      <Content>
        <strong>Stock Exchange:</strong>
        <span>{quote.primaryExchange}</span>
      </Content>
      <Content>
        <strong>Stock Price:</strong>
        <span>
          {Intl.NumberFormat('en-emodeng', {
            style: 'currency',
            currency: 'USD',
          }).format(quote.latestPrice)}
        </span>
      </Content>
    </Container>
  );
};

export default Result;
