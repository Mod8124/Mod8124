const fs = require('fs');
const html = fs.readFileSync('README.md', 'utf8');

const readme = (lng) => {
 return  ` 
  ${lng === "En" ? `🕓 Updated on ` :`🕓 Actualizado en`} ${new Date().toUTCString()}
  `
}

const startComment = '<!-- start lastUpdate -->';
const endComment = '<!-- end lastUpdate -->';

// Find the indices of the start and end comments in the HTML
const startIndex = html.indexOf(startComment);
const endIndex = html.indexOf(endComment);

if (startIndex !== -1 && endIndex !== -1) {
  
  const modifyReadme =  (lng) => html.slice(0, startIndex + startComment.length) +
    readme(lng) + html.slice(endIndex);

  // update readmes
  fs.writeFileSync('README.md', modifyReadme('En'), 'utf-8');
  fs.writeFileSync('README-SP.md', modifyReadme('Es'), 'utf-8');
} 


