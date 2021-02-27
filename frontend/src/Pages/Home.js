import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container style={containerStyle}>
      <Jumbotron style={jumboStyle}>
        <div style={headerStyle}>YouTube Comment Analyser</div>
      </Jumbotron>
      <SearchBar />
    </Container>
  )
}

const headerStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center'
}

const jumboStyle = {
  borderRadius: 120
}

const containerStyle = {
  paddingTop: 225,
  paddingBottom: 8,
  fontSize: '2rem'
}

export default Home
