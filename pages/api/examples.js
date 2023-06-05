import fs from 'fs';

function addToCSV(string1, string2, string3) {
  string3.replace(/,/g, ' ');
  const data = string1 + ',' + string2 + ',' + string3 + '\n';
  fs.appendFile('data.csv', data, (err) => (null));
}
