const https = require('https');
const fs = require('fs');

// load static
const components = require('./ioncomponents.json');
const svelteTemplate = require('./sveltetemplate');
const importListKeys = require('./importkeys.json');
const extra = require('./extra');

// bij undefined of null in prop -> dan null assignen
function isMatch(searchOnString, searchText) {
    searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return searchOnString.match(new RegExp("\\b" + searchText + "\\b", "i")) != null;
}

function pascalize(str) {
    let arr = str.split('-');
    let capital = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    let capitalString = capital.join("");

    return capitalString;
}

const doStuff = () => {

    var dir = './generated';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    components.forEach((component, i) => {
        // console.log('Getting component', component, i);
        setTimeout(() => {
            getDataFromGithub(component);
        }, i * 1000);
    })

}

// https://raw.githubusercontent.com/ionic-team/ionic-framework/main/core/src/components/card/card.tsx
const getDataFromGithub = async (ionlabel, component) => {

    // https://semaphore.co/api/v4/messages?apikey=d9d65c9fc85bbc9a6de478d0e63dee03&limit=1000
    // https://semaphore.co/docs - page	Specifies which page of the results to return. The default is 1.

    let label = ionlabel.replace('ion-', '')
    const url = `https://raw.githubusercontent.com/ionic-team/ionic-framework/main/core/src/components/${label}/${label}.tsx`;

    console.log('Requesting ', url);
    const request = https.request(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });

        response.on('end', async () => {
            // .. const body = JSON.parse(data);

            // console.log('SADADSA', data.split(/\n?\r/))
            if (data == undefined) {
                console.log('Table has nothing', tableName);
            }
            if (data != undefined) {
                const lines = data.split("\n");
                const events = [];
                const props = [];
                const propdeclrs = [];
                let importsToInclude = [];
                //   console.log('Lines', lines, lines.length);
                lines.map(line => {
                    let item = '';

                    line = line.replace('protected ', '');

                    if (line.includes('@Event')) {
                        if (line.includes('eventName')) {
                            const stuff = line.trim().split(' ');
                            const item = stuff[2].replace('\'', '').replace('\'', '').trim();
                            // console.log(stuff, item);

                            if (item.includes('ion')) events.push(item);
                        } else {
                            const stuff = line.trim().split(' ');
                            const item = stuff[1].replace(':', '').replace('!', '').trim();
                            //     console.log(stuff, item);
                            if (item.includes('ion')) events.push(item);
                        }
                    }

                    if (line.includes('@Prop')) {

                        // clean a bit
                        line = line.replace('@Prop({ reflect: true })', '@Prop()');
                        line = line.replace('@Prop({ mutable: true })', '@Prop()');
                        line = line.replace('@Prop({ reflect: true, mutable: true })', '@Prop()');
                        line = line.replace('!', '');
                        line = line.replace('this.pullMin', 'pullMin')

                        // checkbox,ionDateTime, ionInput, ionRadio, ionRadioGroup
                        line = line.replace('this.inputId', `'label'+Date.now()`);

                        // lets find the variable name
                        let stuff = line.trim().split(' ');
                        const propitem = stuff[1].replace('\'', '').replace('\'', '').trim().replace(':', '')

                        // we can store this for now
                        props.push(propitem.replace('?', ''));

                        // optional props - generic ones/defined as undefined - we can assign directly
                        if (line.includes('undefined')) {
                            line = line.replace('?', '').replace(';', ' = undefined;');
                        }

                        // the ? item - we just assign undefined
                        if (propitem.includes('?') && !line.includes('undefined')) {
                            // we assign undefined if there is no assignment
                            if (!line.includes('=')) line = line.replace('?', '').replace(';', ' = ' + 'undefined' + ';'); // stuff[2]
                            if (line.includes('=')) line = line.replace('?', ''); // stuff[2]
                            //    console.log('STUFF', line, stuff)
                        }


                        //       console.log('STUFF', line, stuff)


                        // clean stuff
                        line = line.replace(';;', ';');
                        line = line.replace('?', '');
                        line = line.replace('= Color', `='primary'`)
                            .replace(`= 'primary' = undefined`, `= 'primary'`)
                            //  .replace(`= '' = undefined`, `= ''`)
                            //   .replace(`= 'none' = undefined`, `= 'none'`)
                            //   .replace(`'icon-top' = undefined`, `'icon-top'`)
                            .replace('ids++', 'Date.now()')
                            .replace(`= undefined = undefined`, `= undefined`)
                        //   .replace(`null = '' = undefined`, `null = ''`)
                        //   .replace(`'on' = undefined`, `'on'`)

                        propdeclrs.push('//@ts-ignore')
                        propdeclrs.push(line.replace('@Prop()', 'export let'));
                        // console.log(line, props, propdeclrs);

                        importListKeys.forEach(importkey => {
                            if (isMatch(line, importkey)) importsToInclude.push(importkey)
                            //     if (line.includes(importkey)) importsToInclude.push(importkey)
                        })
                    }

                    //      
                })
                //    console.log('Events', ionlabel, events, props, propdeclrs);

                // do here the magic
                let code = svelteTemplate.replace('<TAG>', ionlabel).replace('<TAG>', ionlabel).replace('<TAG>', ionlabel);
                const component = pascalize(ionlabel);
                code = code.replace('<COMPONENT>', component).replace('<COMPONENT>', component).replace('<COMPONENT>', component)

                let ioneventslabel = '';
                events.forEach(event => {
                    // console.log('EVENT', event, ioneventslabel)
                    ioneventslabel = ioneventslabel + ' on:' + event + '\n'
                })
                code = code.replace('<IONEVENTS>', ioneventslabel)


                let proplabel = ''
                props.forEach(event => {
                    // console.log('EVENT', event, ioneventslabel)
                    proplabel = proplabel + '{' + event + '}\n '
                })
                code = code.replace('<PROPS>', proplabel)

                let decllabel = ''
                propdeclrs.forEach(event => {
                    // console.log('EVENT', event, decllabel)
                    decllabel = decllabel + event + '\n '
                })
                // console.log('EVENT', decllabel)
                code = code.replace('<DECLRS>', decllabel)

                let importlabel = importsToInclude.length == 0 ? '' : `import type {`
                importsToInclude = [...new Set(importsToInclude)];
                importsToInclude.forEach(event => {
                    // console.log('EVENT', event, decllabel)
                    importlabel = importlabel + event + ','
                })
                if (importsToInclude.length > 0) {
                    importlabel = importlabel + `} from '@ionic/core';`
                }
                //  console.log('EVENT', importlabel)
                code = code.replace('<IMPORTS>', importlabel.replace(',}', '}'))

                //  console.log('Code', code)
                let extralabel = ''
                if (extra[component] !== undefined) extralabel = extra[component]
                code = code.replace('<EXTRA>', extralabel)

                console.log('Writing ', component)
                fs.writeFile('generated/' + component + '.svelte', code, function (err) {
                    if (err) return console.log(err);
                });
            }
        });
    })

    request.on('error', (error) => {
        console.log('An error', error);
    });

    request.end()
}

doStuff();

/*

Script to generate exports

components.forEach(component => {
    const toPascal = pascalize(component);
    console.log('// @ts-ignore')
    console.log(`export { default as ${toPascal} } from './components/${toPascal}.svelte';`)
});

*/