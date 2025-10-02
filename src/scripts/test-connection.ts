// Simple database connection test script
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
const envPath = path.join(process.cwd(), '.env');
console.log('Loading .env from:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('✅ .env file loaded successfully');
  console.log('Parsed variables:', result.parsed);
}

// Debug: show what environment variables are actually available
console.log('Available DB env vars:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***SET***' : 'NOT SET');

async function testDatabaseConnection() {
  console.log('🔍 Testing PostgreSQL database connection...\n');

  // Get environment variables
  const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'postgres',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: false }, // Required for AWS RDS
  };

  console.log('📋 Connection Configuration:');
  console.log(`   Host: ${dbConfig.host}`);
  console.log(`   Port: ${dbConfig.port}`);
  console.log(`   Database: ${dbConfig.database}`);
  console.log(`   User: ${dbConfig.user}`);
  console.log(`   Password: ${dbConfig.password ? '***hidden***' : 'NOT SET'}`);
  console.log('');

  // Check if required variables are set
  if (!dbConfig.host || !dbConfig.user || !dbConfig.password) {
    console.error('❌ Missing required environment variables:');
    if (!dbConfig.host) console.error('   - DB_HOST is not set');
    if (!dbConfig.user) console.error('   - DB_USER is not set');
    if (!dbConfig.password) console.error('   - DB_PASSWORD is not set');
    console.log('\n💡 Please set these environment variables and try again.');
    process.exit(1);
  }

  const pool = new Pool(dbConfig);

  try {
    console.log('🔌 Attempting to connect...');
    const client = await pool.connect();
    
    console.log('✅ Connection successful!');
    
    // Test basic query
    console.log('📊 Running test query...');
    const result = await client.query('SELECT NOW() as current_time, version() as postgres_version');
    
    console.log('✅ Query successful!');
    console.log(`   Current Time: ${result.rows[0].current_time}`);
    console.log(`   PostgreSQL Version: ${result.rows[0].postgres_version}`);
    
    // Test database creation (optional)
    console.log('\n🗄️ Testing database operations...');
    await client.query('SELECT 1 as test');
    console.log('✅ Database operations working!');
    
    client.release();
    console.log('\n🎉 All tests passed! Your database connection is working perfectly.');
    
  } catch (error) {
    console.error('\n❌ Connection failed!');
    console.error('Error details:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('password authentication failed')) {
        console.log('\n💡 Suggestion: Check your DB_USER and DB_PASSWORD');
      } else if (error.message.includes('could not connect to server')) {
        console.log('\n💡 Suggestion: Check your DB_HOST and ensure the database is accessible');
      } else if (error.message.includes('database') && error.message.includes('does not exist')) {
        console.log('\n💡 Suggestion: Try using DB_NAME=postgres (default database)');
      }
    }
    
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run the test
testDatabaseConnection();
