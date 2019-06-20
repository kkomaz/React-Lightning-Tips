import React from 'react';
import { Container } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ProfileCard />
    </Container>
  );
}

export default App;
