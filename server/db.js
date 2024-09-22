import pkg from "pg"; // Default import of the pg module
const { Pool } = pkg; // Destructure to get the Pool class
const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "ecommerce",
});
export default pool;
