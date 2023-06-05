import fs from 'fs';

export default function handler(req, res) {
  const { string1, string2, string3 } = req.body;
  const data = `${string1},${string2},${string3}\n`;

  fs.appendFile('data.csv', data, 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create CSV file.' });
    } else {
      res.status(200).json({ message: 'CSV file created successfully.' });
    }
  });
}
