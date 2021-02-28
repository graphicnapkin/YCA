import React from 'react';
import * as CSS from 'csstype';
import { Jumbotron } from 'react-bootstrap';
import { SearchBar } from '../Components/SearchBar';
import { Container } from 'react-bootstrap';

interface HomeProps {
  resultSetHook: Function;
}

export const Home: React.FC<HomeProps> = ( props ) => {
  return (
    <Container style={ containerStyle }>
      <Jumbotron style={ jumboStyle }>
        <div style={ headerStyle }>YouTube Comment Analyser</div>
      </Jumbotron>
      <SearchBar resultSetHook={ props.resultSetHook } />
    </Container>
  );
};

// HeaderStyle not TS compatible?
const headerStyle: CSS.Properties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center'
};

const jumboStyle: CSS.Properties = {
  borderRadius: '120%'
};

const containerStyle: CSS.Properties = {
  paddingTop: '225px',
  paddingBottom: '8px',
  fontSize: '2rem'
};