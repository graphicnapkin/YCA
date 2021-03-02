import { Header } from './Pages/Header';
import { Results } from './Pages/Results';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { CommentThreadsResult } from './util/commonInterfaces';
import { SearchBar } from './Components/SearchBar';

function App() {
  const [ commentThreadsResults, setResults ] = useState( {} as CommentThreadsResult[] );
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact path='/'
          children={ <SearchBar resultSetHook={ setResults } /> }
        />
        <Route
          path='/results'
          children={ <Results results={ commentThreadsResults } /> }
        />
      </Switch>
    </>
  );
}

export default App;
