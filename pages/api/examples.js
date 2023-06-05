import fs from 'fs';

function addToCSV() {
        var string1 = document.getElementById('s1').value;
        var string2 = document.getElementById('s2').value;
        var string3 = document.getElementById('s3').value;
        string3.replace(/,/g, ' ');
        const data = string1 + ',' + string2 + ',' + string3 + '\n';
        fs.writeFile('data.csv','name,email,message', 'utf8', (err) => (null));
        fs.appendFile('data.csv', data, (err) => (null));
}
