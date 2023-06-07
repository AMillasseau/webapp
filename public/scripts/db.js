const { Pool } = require('pg');

const pool = new Pool({
  user: 'default',
  host: 'ep-bold-bush-653757-pooler.us-east-1.postgres.vercel-storage.com',
  database: 'verceldb',
  password: 'o8RGZkbHA5IB',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
