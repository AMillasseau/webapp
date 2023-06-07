export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Do something with the received data, e.g., save it to a database

    res.status(200).json({ message: 'Data received successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
