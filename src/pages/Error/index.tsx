import React from 'react';

import { Container, ErrorIcon } from './styles';

const Error: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Symbol not found</h1>

        <ErrorIcon />
      </div>
      <h2>Enter a valid symbol</h2>
    </Container>
  );
};

export default Error;
