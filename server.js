import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import { readFileSync } from 'fs';
import https from 'https';

// SSL Certificate files
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

app.use(express.static('public'));

app.all(
  '*',
  createRequestHandler({
    getLoadContext() {
      // Optional context logic
    },
  })
);

const PORT = 443;

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`✅ Remix HTTPS server running at https://localhost:${PORT}`);
});
