import { Home } from './Pages/Home'
import { Results } from './Pages/Results'
import { Route, Switch }  from 'react-router-dom'
import React, { useState } from 'react'
import {CommentThreadsResult} from './util/commonInterfaces'

function App() {
  const [commentThreadsResults, setResults] = useState({} as CommentThreadsResult)
  return (
    <Switch>
      <Route exact path='/'
        render={
          ()=><Home resultSetHook={setResults}/>
        }
      />
      <Route path='/results'
        render={
          ()=><Results results={commentThreadsResults}/>
        }
      />
    </Switch>
  )
}

export default App
