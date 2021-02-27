import Home from './Pages/Home'
import SearchBar from './Components/SearchBar'
import { getYoutubeVideoIdFromURL } from './util/globals'
import { CommentThreadsResult } from './util/commonInterfaces'
import { Route, Switch }  from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  )
}

export default App
