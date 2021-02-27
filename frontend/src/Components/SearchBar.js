import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { getYoutubeVideoIdFromURL, getComments } from '../util/globals.ts'

const SearchBar = () => {
  const [videoURL, setVideoURL] = useState('')
  const [results, setResults] = useState()
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    let id = ''
    try {
      id = getYoutubeVideoIdFromURL(videoURL)
      const res = await getComments(id)
      setResults(res)
      history.push('./Results');
    } catch (error) {
      console.log(error)
      ////should build notification banner componet to display messages
    }
  }
  return (
    <div className='grid-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='videoURLSubmit'>
          <Form.Label>Link to video:</Form.Label>
          <Form.Control
            type='text'
            value={videoURL}
            placeholder='Enter a youtube video URL...'
            onChange={(e) => {
              setVideoURL(e.target.value)
            }}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
       {/*results && (
        <div style={{ fontSize: 8 }}>
          {JSON.stringify(results.results, null, 4)}
        </div>
       )*/}
    </div>
  )
}

export default SearchBar
