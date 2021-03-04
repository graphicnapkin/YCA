import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { CommentThreadsResult } from '../util/commonInterfaces'
import AuthorData from './AnalysisPages/AuthorData'
import Length from './AnalysisPages/Length'
import LexicalDiversity from './AnalysisPages/LexicalDiversity'
import Perplexity from './AnalysisPages/Perplexity'
import Sentiment from './AnalysisPages/Sentiment'
import TF_IDF from './AnalysisPages/TF_IDF'

interface ResultsProps {
  results: CommentThreadsResult[]
}

export const Results: React.FC<ResultsProps> = ({ results }) => {
  const location = useLocation()
  const history = useHistory()

  if (location.pathname === '/results') {
    history.push('/results/AuthorData')
  }
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>YCA</Navbar.Brand>
        <Nav className='mr-auto' variant='tabs'>
          <Nav.Link href='/results/AuthorData' eventKey='/results/AuthorData'>
            Author Data
          </Nav.Link>
          <Nav.Link href='/results/Length'>Length</Nav.Link>
          <Nav.Link href='/results/sentiment'>Sentiment</Nav.Link>
          <Nav.Link href='/results/Lexical-Diversity'>
            Lexical Diversity
          </Nav.Link>
          <Nav.Link href='/results/TF-IDF'>TF-IDF</Nav.Link>
          <Nav.Link href='/results/Perplexity'>Perplexity</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path='/results/AuthorData' children={<AuthorData />} />
        <Route path='/results/Length' children={<Length />} />
        <Route path='/results/Sentiment' children={<Sentiment />} />
        <Route
          path='/results/Lexical-Diversity'
          children={<LexicalDiversity />}
        />
        <Route path='/results/TF-IDF' children={<TF_IDF />} />
        <Route path='/results/Perplexity' children={<Perplexity />} />
      </Switch>
    </>
  )
}
