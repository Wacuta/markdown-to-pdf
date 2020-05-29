# Markdown to PDF

Node project that converts Markdown `.md` files to PDFs, keeping the input organisation.

This project uses [markdown-pdf](https://github.com/alanshaw/markdown-pdf) dependency.

> Your Markdown is first converted to HTML, then pushed into the HTML5 Boilerplate index.html. Phantomjs renders the page and saves it to a PDF.

## Pre-requisite

To run the program, you will need [Node.js](https://nodejs.org/)

## Install

```sh
npm install
```

## Usage

Put your markdown files in `/input` folder and launch the programme.

```sh
node index.js
```

You will find the result in the `/output` folder.

## Contribute

Do not hesitate! [Open an issue](https://github.com/Wacuta/markdown-to-pdf/issues/new) or submit Pull Requests.

## License

[MIT](LICENCE) © Maxime Guyot
