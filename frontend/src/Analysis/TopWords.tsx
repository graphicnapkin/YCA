import { CommentThreadsResult } from '../util/commonInterfaces'

export const topWords = (comments: CommentThreadsResult, length: number) => {
  const words = {} as any
  comments.results.items.forEach((comment) => {
    comment.snippet.topLevelComment.snippet.textOriginal
      .split(' ')
      .forEach((word) => {
        const cleanWord = word.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')
        cleanWord && words[cleanWord]
          ? words[cleanWord]++
          : (words[cleanWord] = 1)
      })
  })
  return (
    <div>
      {Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .map((word) => <li>{`${word}: ${words[word]}`}</li>)
        .slice(0, length)}
    </div>
  )
}

//migth want to filte rout the top 100 most common words or soemthing
