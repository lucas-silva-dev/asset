import React from 'react';

// import man from '../../assets/man.svg';

import { Container, SearchIcon } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Find your favorite stock quotes</h1>
      <SearchIcon />
    </Container>
  );
};

export default Home;
