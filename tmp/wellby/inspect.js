const fs = require('fs');
const code = fs.readFileSync('/tmp/wellby/app.js', 'utf8');

const matches = code.match(/https?:\/\/[^"'` \)]+/g) || [];
console.log('URLs:', [...new Set(matches)].slice(0, 30));

const imgMatches = code.match(/\/images\/[^"'` \)]+/g) || [];
console.log('Local images:', [...new Set(imgMatches)]);

// Find Korean text snippets or titles
const koreanSnippets = code.match(/[\uAC00-\uD7A3]{2,}[^\n"'`<>{}]{0,50}/g) || [];
console.log('Korean samples:', [...new Set(koreanSnippets)].slice(0, 30));
