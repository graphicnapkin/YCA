import React from 'react';
import { Container } from 'react-bootstrap';
import { CommentThreadsResult } from '../util/commonInterfaces';
import { commentCount } from '../Analysis/CommentCount';
import { topWords } from '../Analysis/TopWords';

interface ResultsProps {
  results: CommentThreadsResult;
}

export const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <Container>
      <h3>Commment Count: {commentCount(results)}</h3>
      <h3>Top Words 10:</h3>
      {topWords(results, 10)}
    </Container>
  );
};
