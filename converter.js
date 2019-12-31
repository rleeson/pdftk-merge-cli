var PDFMerge = require('pdf-merge');
let in1, in2, out;

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  if ( 2 === index ) {
      in1 = val;
  }
  if ( 3 === index ) {
      in2 = val;
  }
  if ( 4 === index ) {
      out = val;
  }
});
 
const files = [
    in1,
    in2,
];

PDFMerge(files, {output: out});