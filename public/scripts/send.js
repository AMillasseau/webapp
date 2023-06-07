funtion send(name, contact, message) {
const query = 'INSERT INTO your_table (Name, Email, Text) VALUES ($1, $2, $3)';
const values = [name, contact, message];

pool.query(query, values, (error, result) => {
  if (error) {
    throw error;
  }
  console.log('Data inserted successfully');
});}
