const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'VysonBackendLearning',
    password: '1234',
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;