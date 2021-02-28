import { render, screen } from '@testing-library/react';
import App from './App';

test( 'renders div', () => {
  render( <App /> );
  const linkElement = screen.getByText( 'Hello world! This is the final FINAL build test (for real).' );
  expect( linkElement ).toBeInTheDocument();
} );

test( 'renders input field', () => {
  return false
  //...
} );

test( 'renders submit button', () => {
  return false
  //...
} );

test( 'loads environment variables', () => {
  // Need to load API keys for example into REACT_APP_ENV variables...
  return false
  //...
} );