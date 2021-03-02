import { CommentThreadsResult } from '../util/commonInterfaces';

export const commentCount = (comments: CommentThreadsResult) => {
  return comments.results.items.length;
};
