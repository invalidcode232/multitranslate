const fs = require('fs');
const path = require('path');
const languages = JSON.parse(fs.readFileSync(path.join(__dirname, 'languages.json'), 'utf8'));

const languages_obj = [];
languages.forEach(language => {
    const [language_name, language_code] = language.split(' - ');
    
    languages_obj.push({
        name : language_name,
        code : language_code
    })
});

let json = JSON.stringify(languages_obj);
console.log(json)