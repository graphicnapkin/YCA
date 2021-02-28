require( 'dotenv' ).config();
import { Express, Request, Response } from 'express';
import express from 'express';
import * as path from 'path';
const fetch = require( 'node-fetch' );
const rateLimit = require( 'express-rate-limit' );

// Limits rate of request to 5 per minute per IP
//  This shouldn't be an issue since we'll have a synchronous
//  api response which will take some time.
const limiter = rateLimit( {
  windowMs: 60 * 1000,
  max: 5
} );

export class Server {
  private app: Express;

  constructor( app: Express ) {
    this.app = app;
    // Enable once we're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    //  see https://expressjs.com/en/guide/behind-proxies.html
    //  this.app.set('trust proxy', 1);

    this.app.use( express.static( path.resolve( './' ) + '/build/frontend' ) );

    this.app.use( limiter );
    // 'any' needs to be changed to whatever interface conforms to youtube api return
    this.app.get(
      '/api/search',
      async ( req: Request, res: Response ): Promise<any> => {
        res.setHeader( 'Access-Control-Allow-Origin', '*' );
        res.setHeader( 'Access-Control-Allow-Methods', '*' );
        res.setHeader( 'Access-Control-Allow-Headers', '*' );
        const searchString = req.query.q;
        const maxResults = 100;

        // Single page form of API request:
        // https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100
        // Next-page-token form of API request:
        // https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100&pageToken={nextPageToken}

        try {
          const response = await fetch(
            'https://www.googleapis.com/youtube/v3/commentThreads' +
            `?key=${ process.env.REACT_APP_YOUTUBE_API_KEY }` +
            '&textFormat=plainText&part=snippet' +
            `&videoId=${ searchString }` +
            `&maxResults=${ maxResults }`
          );
          const results = await response.json();

          return res.json( {
            status: true,
            results
          } );
        } catch ( err ) {
          // For now just use a generic error response
          //  we'll need to reflect whatever error the API throws to the user,
          //  ... 'no video with this url found' error,
          //  or 'could not establish connection' error, etc.
          return res.status( 500 ).json( {
            status: false,
            message: err.message
          } );
        }
      }
    );

    // The below get request needs to always be the last in this list
    this.app.get( '*', ( req: Request, res: Response ): void => {
      res.status( 404 ).send( '404: Page Not Found' );
    } );
  }

  public start( port: number ): void {
    this.app.listen( port, () =>
      console.log( `Server listening on port ${ port }!` )
    );
  }
}
