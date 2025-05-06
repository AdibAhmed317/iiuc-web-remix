import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import { readFileSync } from 'fs';
import https from 'https';
import http from 'http';

import * as build from './build/server/index.js'; // Remix server-side build output

// SSL certificate paths
const sslOptions = {
  key: readFileSync('/etc/ssl/wildcard/iiuc.ac.bd.key'),
  cert: readFileSync('/etc/ssl/wildcard/STAR_iiuc_ac_bd.crt'),
  ca: [
    readFileSync(
      '/etc/ssl/wildcard/SectigoPublicServerAuthenticationRootR46_USERTrust.crt'
    ),
    readFileSync(
      '/etc/ssl/wildcard/SSL2BUYEMEARSADomainValidationSecureServerCA.crt'
    ),
    readFileSync('/etc/ssl/wildcard/USERTrustRSACertificationAuthority.crt'),
  ],
};

const app = express();

// Serve static files from the client build folder
app.use(express.static('build/client')); // This serves the client-side assets

// Pass build to Remix handler
app.all(
  '*',
  createRequestHandler({
    build,
    getLoadContext() {
      // You can pass auth/session data here if needed
      return {};
    },
  })
);

// Start HTTPS server
const httpsPort = 443;
https.createServer(sslOptions, app).listen(httpsPort, () => {
  console.log(
    `✅ Remix HTTPS server running at https://localhost:${httpsPort}`
  );
});

// Start HTTP server on port 80 to redirect to HTTPS
const httpPort = 80;
http
  .createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  })
  .listen(httpPort, () => {
    console.log(
      `🚀 HTTP server running on port ${httpPort}, redirecting to HTTPS.`
    );
  });
