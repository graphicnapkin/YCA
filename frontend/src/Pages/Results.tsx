import React from 'react';
import { Container } from 'react-bootstrap';
import { CommentThreadsResult } from '../util/commonInterfaces';

interface ResultsProps {
  results: CommentThreadsResult[];
}

export const Results: React.FC<ResultsProps> = ( { results } ) => {
  console.log(results)
  return (
    <Container>
    </Container>
  );
};