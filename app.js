const express = require('express');
const pool = require('./dbConfig');
const app = express();
const PORT = 3000;

app.get('/insert1000', async (req, res) => {
    try {
        res.send(`The server is working in root route`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting rows');
    }
});
app.get('/insert1000', async (req, res) => {
    const rowsToInsert = 1000;

    try {
        const client = await pool.connect();
        console.time('TotalQueryTime'); // Start measuring total time
        const values = [];
        for (let i = 0; i < rowsToInsert; i++) {
            const originalUrl = `https://www.example${Math.floor(Math.random() * 10000)}.com`;
            values.push(`('${originalUrl}')`);

        }

        const query = `
            INSERT INTO url_shortener (original_url)
            VALUES ${values.join(',')}
        `;

        await client.query(query);
        console.timeEnd('TotalQueryTime'); // End measuring total time
        client.release();

        res.send(`${rowsToInsert} rows inserted successfully`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting rows');
    }
});

app.get('/insert1000', async (req, res) => {
    const rowsToInsert = 1000;

    try {
        const client = await pool.connect();
        console.time('TotalQueryTime'); // Start measuring total time
        const values = [];
        for (let i = 0; i < rowsToInsert; i++) {
            const originalUrl = `https://www.example${Math.floor(Math.random() * 10000)}.com`;
            values.push(`('${originalUrl}')`);

        }

        const query = `
            INSERT INTO url_shortener (original_url)
            VALUES ${values.join(',')}
        `;

        await client.query(query);
        console.timeEnd('TotalQueryTime'); // End measuring total time
        client.release();

        res.send(`${rowsToInsert} rows inserted successfully`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting rows');
    }
});

app.get('/insert1M', async (req, res) => {
    const rowsToInsert = 1000000;

    try {
        const client = await pool.connect();
        console.time('TotalQueryTime'); // Start measuring total time
        const values = [];
        for (let i = 0; i < rowsToInsert; i++) {
            const originalUrl = `https://www.example${Math.floor(Math.random() * 1000000)}.com`;
            values.push(`('${originalUrl}')`);

        }

        const query = `
            INSERT INTO url_shortener (original_url)
            VALUES ${values.join(',')}
        `;

        await client.query(query);
        console.timeEnd('TotalQueryTime'); // End measuring total time
        client.release();

        res.send(`${rowsToInsert} rows inserted successfully`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting rows');
    }
});

app.get('/insert10M', async (req, res) => {
    const rowsToInsert = 10000000;

    try {
        const client = await pool.connect();
        console.log("10M query started");
        console.time('TotalQueryTime'); // Start measuring total time
        const values = [];
        for (let i = 0; i < rowsToInsert; i++) {
            const originalUrl = `https://www.example${Math.floor(Math.random() * 10000000)}.com`;
            values.push(`('${originalUrl}')`);

        }

        const query = `
            INSERT INTO url_shortener (original_url)
            VALUES ${values.join(',')}
        `;

        await client.query(query);
        console.timeEnd('TotalQueryTime'); // End measuring total time
        client.release();

        res.send(`${rowsToInsert} rows inserted successfully`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting rows');
    }
});

app.get('/run-query', async (req, res) => {
    const shortCodes = ['09c8b3', '95f9d3', 'aa4445']; // Short codes to query
    const iterations = 1000000; // Number of iterations
    let totalQueriesExecuted = 0;

    try {
        const client = await pool.connect();

        console.time('TotalQueryTime'); // Start measuring total time
        console.log("query running started");
        for (let i = 1; i <= iterations; i++) {
            await client.query(
                `SELECT original_url 
                 FROM url_shortener 
                 WHERE short_code IN ($1, $2, $3)`,
                shortCodes
            );

            totalQueriesExecuted++;

            if (i % 10000 === 0) {
                console.log(`Executed ${(i*100)/1000000}% of quesries is done so far...`);
            }
        }

        console.timeEnd('TotalQueryTime'); // End measuring total time
        res.send(`Successfully executed ${totalQueriesExecuted} queries.`);
    } catch (err) {
        console.error('Error executing queries:', err.stack);
        res.status(500).send('An error occurred while running the queries.');
    } 
});

// app.get('/insert-1m', async (req, res) => {
//     const rowsToInsert = 1000000;
//     const batchSize = 10000;

//     try {
//         const client = await pool.connect();
//         console.time('TotalQueryTime'); // Start measuring total time

//         for (let i = 0; i < rowsToInsert; i++) {
//             const values = [];
//             for (let j = 0; j < batchSize; j++) {
//                 const originalUrl = `https://www.example${Math.floor(Math.random() * 1000000)}.com`;
//                 values.push(`('${originalUrl}')`);
//             }

//             const query = `
//                 INSERT INTO url_shortener (original_url)
//                 VALUES ${values.join(',')}
//             `;

//             await client.query(query);
//             console.log(`Batch ${i + 1}/${rowsToInsert / batchSize} inserted`);
//         }
//         console.timeEnd('TotalQueryTime'); // End measuring total time
//         client.release();
//         res.send('1M rows inserted successfully');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error inserting rows');
//     }
// });



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
