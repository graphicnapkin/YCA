import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron style={jumboStyle}>
      <div style={headerStyle}>YouTube Content Analyser</div>
    </Jumbotron>
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

export default Home
