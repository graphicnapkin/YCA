import React, { useState } from 'react';
import * as CSS from 'csstype';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getYoutubeVideoIdFromURL, getComments } from '../util/globals';

interface SearchBarProps {
  resultSetHook: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({ resultSetHook }) => {
  const [videoURL, setVideoURL] = useState('');
  const history = useHistory();

  async function handleSubmit(event: any) {
    event.preventDefault();
    let id = '';
    try {
      id = getYoutubeVideoIdFromURL(videoURL);
      const res = await getComments(id);
      resultSetHook(res);
      history.push('./results');
    } catch (error) {
      console.log(error);
      //should build notification banner componet to display messages
    }
  }
  return (
    <Container className='grid-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId='videoURLSubmit'
          style={{ display: 'inline-block', width: '80%' }}
        >
          <Form.Label style={labelStyle}>Link to video:</Form.Label>
          <Form.Control
            type='text'
            value={videoURL}
            placeholder='Enter a youtube video URL...'
            onChange={(e) => {
              setVideoURL(e.target.value);
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
    </Container>
  );
};

const labelStyle: CSS.Properties = {
  padding: '15px 0px',
  width: '70%',
};
