import React, { useState, ChangeEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import { Container, LogoIcon } from './styles';

interface StockData {
  latestPrice: number;
  companyName: string;
  primaryExchange: string;
}

const Header: React.FC = () => {
  const history = useHistory();

  const [asset, setAsset] = useState('');
  // const [quote, setQuote] = useState<StockData>({} as StockData);

  // useEffect(() => {
  //   function loadStocks() {}
  // }, []);

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const { data } = await axios.get<StockData>(
        `https://cloud.iexapis.com/stable/stock/${asset}/quote?token=pk_6d0042f4630a4e0895c9e06dd7222e1c`,
      );

      // const stocks = {
      //   latestPrice: data.latestPrice,
      //   companyName: data.companyName,
      //   primaryExchange: data.primaryExchange,
      // };

      // console.log(data);

      setAsset('');
      // setQuote(data);

      return history.push('/result', data);
    } catch (err) {
      return history.push('/error');
    }
  }

  return (
    <Container>
      {/* <img src={logo} alt="logo" /> */}
      <Link to="/">
        <LogoIcon />
      </Link>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Enter a symbol"
          value={asset}
          required
          onChange={event => setAsset(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};

export default Header;
