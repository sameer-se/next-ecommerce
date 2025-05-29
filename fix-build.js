const fs = require('fs');
const path = require('path');

// Ensure the .next/server/pages directory exists
const serverPagesDir = path.join(__dirname, '.next', 'server', 'pages');

if (!fs.existsSync(serverPagesDir)) {
  console.log('Creating server pages directory...');
  fs.mkdirSync(serverPagesDir, { recursive: true });
}

// Create a basic _document.js file if it doesn't exist
const documentPath = path.join(serverPagesDir, '_document.js');

if (!fs.existsSync(documentPath)) {
  console.log('Creating _document.js file...');
  const documentContent = `
    import { Html, Head, Main, NextScript } from 'next/document';

    export default function Document() {
      return (
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  `;
  
  fs.writeFileSync(documentPath, documentContent);
}

console.log('Build fix completed!');
