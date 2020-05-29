let markdownpdf = require("markdown-pdf")
var fs = require('fs');
var path = require('path');

const INPUT_FOLDER = './input'
const OUTPUT_FOLDER = './output'

const REGEX_MD = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ]*.(md|MD)$/;
const REGEX_FILE = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ]*[^.]\w*$/;


/* Parcour en profondeur su ce n'est pas un .md */
let searchMarkdownFiles = function(dir, done) {
    fs.readdir(dir, function(err, files) {
        if(err) return done(err); // erreur de dossier

        files.forEach(file => {
            
            let tmp = dir+'/'+file

            if (REGEX_FILE.test(file)) {
                getMD(tmp, function(err, results) {
                    if (err) throw err;
                    done(null, results)
                })
            }

            if (REGEX_MD.test(file)) {
                done(null, tmp)
            }

        });
    })
}

searchMarkdownFiles(INPUT_FOLDER, function(err, results) {
    if (err) throw err;

    let outputPdf = results
        .replace(INPUT_FOLDER, OUTPUT_FOLDER)
        .replace('.md', '.pdf')
        .replace('.MD', '.pdf')

    markdownpdf()
        .from(results)
        .to(outputPdf, function () {
            console.log(outputPdf + " created")
        })
});

