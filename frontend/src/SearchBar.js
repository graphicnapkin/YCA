import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchBar = () => {

  function handleSubmit (event) {
    event.preventDefault()
    console.log("state of videoURL at submit: ", videoURL);
  }

  const [videoURL, setVideoURL] = useState('')
  return <div class='grid-container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="videoURLSubmit">
        <Form.Label>Link to video:</Form.Label>
        <Form.Control type="text"
          value={ videoURL }
          placeholder="Enter a youtube video URL..."
          onChange={(e) => { setVideoURL(e.target.value) }} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
}

export default SearchBar
