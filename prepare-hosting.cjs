const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'query-engine.js', 'contribution-calendar.js', 'favicon.svg', 'assets']) {
  fs.cpSync(path.join(root, name), path.join(out, name), { recursive: true });
}
console.log('Prepared static portfolio in dist.');
