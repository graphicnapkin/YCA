require("dotenv").config();
import {Express, Request, Response} from "express";
import express from "express";
import * as path from "path";
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");

// Limits rate of request to 1 per second per IP
//  This shouldn't be an issue since we'll have a synchronous
//  api response which will take some time.
const limiter = rateLimit({
    windowMS: 1000,
    max: 1,
})

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;
        this.app.use(limiter);
        // Enable once we're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
        //  see https://expressjs.com/en/guide/behind-proxies.html
        //  this.app.set('trust proxy', 1);

        this.app.use(express.static(path.resolve("./") + "/build/frontend"));

        // 'any' needs to be changed to whatever interface conforms to youtube api return
        this.app.get("/api/search", (req: Request, res: Response): any => {
            // This would be a good function to make async in the future, for now let's stick to sync...
            //  Get the api request in the correct searchString format
            const searchString = req.query.q;
            // This is maxResults per page of response
            const maxResults = 100;

            // Single page form of API request:
            // https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100
            // Next-page-token form of API request:
            // https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100&pageToken={nextPageToken}

            // This try block should only include the fetch call.
            //  Try blocks should be ideally one operation, not *~4~*
            try {
                //jankey string concatenation so that we avoid 6000 characters
                const response = fetch('https://www.googleapis.com/youtube/v3/commentThreads'
                + `?key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                + '&textFormat=plainText&part=snippet'
                + `&videoId=${searchString}`
                + `&maxResults=${maxResults}`);
                let results = response.text();
                results = JSON.parse(results)
                return res.json({
                    status: true,
                    results,
                })
            }
            catch (err) {
                // For now just use a generic error response
                //  we'll need to reflect whatever error the API throws to the user,
                //  ... 'no video with this url found' error,
                //  or 'could not establish connection' error, etc.
                return res.status(500).json({
                    status: false,
                    message: err.message,
                })
            }
        });

        // The below get request needs to always be the last in this list
        this.app.get("*", (req: Request, res: Response): void => {
            res.status(404).send('404: Page Not Found');
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}