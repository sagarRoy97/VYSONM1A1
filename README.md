# VYSONM1A1
Module 1: Systematic Query Profiling, Assignment 1: URL shortening

# URL Shortener Database Schema

The following SQL query creates a table with 4 columns: `id`, `original_url`, `short_code`, and `created_at`.

```sql
CREATE TABLE url_shortener (
    id SERIAL PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_code VARCHAR(10) DEFAULT substring(md5(random()::text) from 1 for 6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# Sample Data Insertion

The following SQL query inserts 5 rows into the `url_shortener` table:

```sql
INSERT INTO url_shortener (original_url) VALUES
('https://www.example.com'),
('https://www.google.com'),
('https://www.openai.com'),
('https://swapnil.net/library'),
('https://www.github.com');
```
The following SQL query calculates the size of the table
```sql
SELECT pg_size_pretty(pg_relation_size('url_shortener')) AS table_size;
```

With this database, we created a server with Express.js. There, we inserted 1,000 rows, then 1 million rows, and then 10 million rows. At last, we tried to put a query in a 1 million times loop in this table. To setup this
first take a clone of this repo then inside root directory of this repo run the following command to install npm packages and dependencies
```bash
npm install
```
After that we can start the server by the next command wriiten below
```bash
node app.js
```
Now we can test the server in the browser and test the routes.


# The Actual Assignment Link: 

[Module 1: Systematic Query Profiling](https://swap.notion.site/Module-1-Systematic-Query-Profiling-11ca4d37f74980518ed9f30e77995861)

[URL Shortener Assignment](https://swap.notion.site/VYSONM1A1-URL-Shortener-11fa4d37f749803d8dc5c9718818ed0f)


# Assignment Submission

The Google Doc link of Assignment submission: [Assignment Submission](https://docs.google.com/document/d/1_7v1wIhLvUTPpgRIFl552fwbs6c0OpHIHxrv02RsuLY/edit?usp=sharing)
