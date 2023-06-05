async function createCSV() {
  const string1 = document.getElementById('s1').value;
  const string2 = document.getElementById('s2').value;
  const string3 = document.getElementById('s3').value;

  try {
    const response = await fetch('/api/create-csv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ string1, string2, string3 })
    });

    if (response.ok) {
      console.log('CSV file created successfully.');
    } else {
      console.error('Failed to create CSV file.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
