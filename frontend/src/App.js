import Home from './Home'
import SearchBar from './SearchBar'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container style={containerStyle}>
      <Home />
      <SearchBar />
    </Container>
  )
}

const containerStyle = {
  paddingTop: 225,
  paddingBottom: 8,
  fontSize: '2rem'
}
export default App
