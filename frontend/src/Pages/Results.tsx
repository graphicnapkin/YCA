import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { CommentThreadsResult } from '../util/commonInterfaces'

interface ResultsProps {
  results: CommentThreadsResult[]
}

export const Results: React.FC<ResultsProps> = ({ results }) => {
  console.log(results)
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}
