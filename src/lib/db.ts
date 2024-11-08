// lib/mysql.ts
import mysql, { Pool } from 'mysql2/promise';

const connection: Pool = mysql.createPool({
  host: '127.0.0.1',
  port:3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default connection;
