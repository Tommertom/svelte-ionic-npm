const fs = require('fs');
const { resolve } = require('path');
const { readdir } = require('fs').promises;

// load static
let components = require('./ioncomponents.json');
components.push('ion-tabs', 'ion-back-button', 'ion-page');
components = components.sort(function (a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
})

function pascalize(str) {
    let arr = str.split('-');
    let capital = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    let capitalString = capital.join("");

    return capitalString;
}


const processFile = (filename, data) => {
    // let's do the tag-replacements
    let newContent = data;
    const componentMap = {};
    let replacements = 0;

    console.log('Getting data ', filename, newContent.length)

    do {
        replacements = 0;
        components.forEach(component => {
            let componentReplacements = 0;

            if (newContent.includes(component)) {
                replacements = replacements + 1;
                const regex = new RegExp(component, "g");
                newContent = newContent.replace(regex, pascalize(component))
                componentMap[pascalize(component)] = true;
            }
        })
    } while (replacements > 0);

    // find if we have a script to do the imports
    const imports = Object.keys(componentMap).map(component => component)
    const importLabel = `import { ${imports} } from 'ionic-svelte/experimental';`.replace(', }', ' }') + '\n';

    if (newContent.includes('</script>')) {
        newContent = newContent
            .replace('<script>', '<script>\n' + importLabel)
            .replace('<script lang="ts">', '<script lang="ts">\n' + importLabel)
    } else {
        newContent = `<script>
       ${importLabel} 
       </script>
       ` + newContent
    }

    console.log('code', newContent)

    fs.writeFile(filename.replace('.svelte', '.bak'), data, function (err) {
        if (err) return console.log(err);
    });

    fs.writeFile(filename, newContent, function (err) {
        if (err) return console.log(err);
    });
}


// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });

    const files = await Promise.all(dirents.map((dirent) => {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}


if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' Dir Name');
    process.exit(1);
}

const dirname = process.argv[2];
console.log('Processsing directory name ', dirname)
getFiles(dirname).then(s => {
    s.filter(file => file.includes('.svelte') && !file.includes('.svelte.bak'))
        .forEach(file => {
            console.log('Processing', file);
            fs.readFile(file, 'utf8', function (err, data) {
                if (!err) {
                    //  console.log('received data: ' + data);
                    processFile(file, data);
                } else {
                    console.log(err);
                }
            });
        })
})


console.log('Please note, things like "translucent="true" needs to be replaced by translucent={true}')

