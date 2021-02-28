import { CommentThreadsResult } from './commonInterfaces';

export function getYoutubeVideoIdFromURL( url: string ): string {
  const validURL = URLParse( url );
  if ( !validURL.isValid ) throw TypeError;
  return validURL.id || '';
}

export async function getComments( id: string ) {
  //will need to refactor to handle paging of results
  console.log( 'starting search' );
  const response = await fetch( `http://localhost:8080/api/search?q=${ id }` );
  const results: CommentThreadsResult = await response.json();
  return results;
}

function URLParse( url: string ): { isValid: boolean; id?: string; } {
  //  The captured groups are:
  //protocol
  //subdomain
  //domain
  //path
  //video code
  //query string
  const pattern = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  if ( !pattern.test( url ) ) {
    return { isValid: false };
  }
  const matches = pattern.exec( url );
  if ( !matches?.[ 5 ] ) return { isValid: false };

  return { isValid: true, id: matches[ 5 ] };
}
