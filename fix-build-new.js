const fs = require('fs');
const path = require('path');

// Ensure the .next directory exists
const nextDir = path.join(__dirname, '.next');
if (!fs.existsSync(nextDir)) {
  console.log('Creating .next directory...');
  fs.mkdirSync(nextDir, { recursive: true });
}

// Ensure the .next/server directory exists
const serverDir = path.join(nextDir, 'server');
if (!fs.existsSync(serverDir)) {
  console.log('Creating server directory...');
  fs.mkdirSync(serverDir, { recursive: true });
}

// Ensure the .next/server/pages directory exists
const serverPagesDir = path.join(serverDir, 'pages');
if (!fs.existsSync(serverPagesDir)) {
  console.log('Creating server pages directory...');
  fs.mkdirSync(serverPagesDir, { recursive: true });
}

// Create a basic _document.js file if it doesn't exist
const documentPath = path.join(serverPagesDir, '_document.js');
if (!fs.existsSync(documentPath)) {
  console.log('Creating _document.js file...');
  const documentContent = `
export default function Document() {
  return (
    <html>
      <head></head>
      <body>
        <div id="__next"></div>
      </body>
    </html>
  );
}
`;
  fs.writeFileSync(documentPath, documentContent);
}

// Create a pages-manifest.json file if it doesn't exist
const manifestPath = path.join(serverPagesDir, 'pages-manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.log('Creating pages-manifest.json file...');
  const manifestContent = '{"/_app":"pages/_app.js","/_document":"pages/_document.js","/_error":"pages/_error.js","/":"pages/index.js"}';
  fs.writeFileSync(manifestPath, manifestContent);
}

// Create a basic _error.js file if it doesn't exist
const errorPath = path.join(serverPagesDir, '_error.js');
if (!fs.existsSync(errorPath)) {
  console.log('Creating _error.js file...');
  const errorContent = `
export default function Error() {
  return (
    <div>
      <h1>Error occurred</h1>
    </div>
  );
}
`;
  fs.writeFileSync(errorPath, errorContent);
}

// Create a basic _app.js file if it doesn't exist
const appPath = path.join(serverPagesDir, '_app.js');
if (!fs.existsSync(appPath)) {
  console.log('Creating _app.js file...');
  const appContent = `
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
`;
  fs.writeFileSync(appPath, appContent);
}

console.log('Build fix completed!');
