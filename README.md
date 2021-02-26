# YCA

## Follow these steps to make a UI change:
### 1) make your change in the frontend subdirectory
### 2) run the following in the frontend subdirectory: npm run build
### 3) run the following in the root npm run build && npm start

Components should be created in the app subdirectory.
Front end is still in ReactJS, only the backend is in TSX.
On build, YCA/app, YCA/frontend, and index.ts are transpiled,
placed in YCA/build, and served statically - for now - on whatever
port is defined in index.ts