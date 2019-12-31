# pdftk-merge-cli

Merge together multiple PDF files using the [PDFtk Toolkit Free Edition](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) on Windows using the CLI.

# Usage

Install the PDFtk Toolkit, make sure to add the executable to your environment variables. Once installed, restore the NPM packages using `npm ci`.

Merge together two or more PDF files using the following syntax:

```
node converter.js {output_file.pdf} {in1.pdf} {in2.pdf} (... additional pdfs)
```