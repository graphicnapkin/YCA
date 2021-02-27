import { Home } from './Pages/Home'
import { Results } from './Pages/Results'
import { Route, Switch }  from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Results' component={Results}/>
    </Switch>
  )
}

export default App
