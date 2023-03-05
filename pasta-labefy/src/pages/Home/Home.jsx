import React from 'react'
import { Container, Button, Header } from './StyleHome'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container>
      <Header>       
        <h2>Login</h2>
        <h2>Cadastre-se</h2>
      </Header>
      <Button>
        <Link to="/playlist">Playlist</Link>
      </Button>
         
    </Container>
  )
}

export default Home