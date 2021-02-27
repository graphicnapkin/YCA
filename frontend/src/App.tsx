import { Home } from './Pages/Home'
import { Results } from './Pages/Results'
import { Route, Switch }  from 'react-router-dom'
import React, { useState } from 'react'

function App() {
  const [results, setResults] = useState([])
  return (
    <Switch>
      <Route exact path='/' component={<Home resultSetHook={setResults}/>}/>
      <Route path='/results' component={<Results results={results}/>}/>
    </Switch>
  )
}

export default App
