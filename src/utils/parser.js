const fs = require('fs');
const path = require('path');
const languages = JSON.parse(fs.readFileSync(path.join(__dirname, 'languages.json'), 'utf8'));

const languages_obj = [];
let i = 0;
languages.forEach(language => {
    const [language_name, language_code] = language.split(' - ');

    languages_obj[i] = {
        name : language_name,
        code : language_code
    }

    i++;
});

let json = JSON.stringify(languages_obj);
console.log(json)