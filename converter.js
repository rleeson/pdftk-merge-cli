const PDFMerge = require('pdf-merge');
let inFiles = [], out = '';

process.argv.forEach((val, index) => {
  switch(index) {
      case 0:
      case 1:
          break;
      case 2: 
        out = val;
        break;
      default:
        inFiles.push(val);
  }
});

console.log(`PDF files to combine:`);
console.log(inFiles);
PDFMerge(inFiles, {output: out});
console.log(`Combined file location: ${out}`);