import path from 'path';
import fs from 'fs';

import React, { ReactElement } from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import { StaticRouter } from 'react-router-dom';

const PORT = process.env.PORT || 3006;
const server = express();

server.get('/', (req, res) => {
  const context = { props: { posts: [] } };

  const server = ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={req.url} context={context}>
      <App posts={['wat']} />
    </StaticRouter>
  );

  console.log('waht');

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    console.log(data);

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${server}</div>`)
    );
  });
});

server.use(express.static('./build'));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
