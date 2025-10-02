// Database connection test using AWS Secrets Manager
import { getPool, testConnection, closePool, getCredentialsInfo } from '@/lib/database/secrets-config';

async function testSecretsManagerConnection() {
  console.log('🔍 Testing PostgreSQL database connection with AWS Secrets Manager...\n');

  try {
    // First, try to get credentials info
    console.log('📋 Fetching database configuration...');
    const credentialsInfo = await getCredentialsInfo();
    
    if (!credentialsInfo) {
      console.error('❌ Failed to retrieve credentials from Secrets Manager');
      process.exit(1);
    }

    console.log('📋 Database Configuration:');
    console.log(`   Host: ${credentialsInfo.host}`);
    console.log(`   Port: ${credentialsInfo.port}`);
    console.log(`   Database: ${credentialsInfo.database}`);
    console.log(`   User: ${credentialsInfo.user}`);
    console.log(`   Password: ${credentialsInfo.passwordSet ? '***SET***' : 'NOT SET'}`);
    console.log('');

    // Test the connection
    console.log('🔌 Testing database connection...');
    const isConnected = await testConnection();
    
    if (!isConnected) {
      console.error('❌ Database connection test failed');
      process.exit(1);
    }

    // Test basic operations
    console.log('📊 Running test queries...');
    const pool = await getPool();
    const client = await pool.connect();
    
    try {
      // Test query
      const result = await client.query('SELECT NOW() as current_time, version() as postgres_version');
      console.log('✅ Query successful!');
      console.log(`   Current Time: ${result.rows[0].current_time}`);
      console.log(`   PostgreSQL Version: ${result.rows[0].postgres_version.split(' ')[0]}`);
      
      // Test table creation (for votes)
      console.log('\n🗄️ Testing table operations...');
      await client.query(`
        CREATE TABLE IF NOT EXISTS test_connection (
          id SERIAL PRIMARY KEY,
          test_data VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      await client.query(`
        INSERT INTO test_connection (test_data) VALUES ('Connection test successful')
      `);
      
      const testResult = await client.query('SELECT * FROM test_connection ORDER BY id DESC LIMIT 1');
      console.log('✅ Table operations successful!');
      console.log(`   Test record: ${testResult.rows[0].test_data}`);
      
      // Clean up test table
      await client.query('DROP TABLE IF EXISTS test_connection');
      console.log('✅ Test cleanup completed');
      
    } finally {
      client.release();
    }

    console.log('\n🎉 All tests passed! Your Secrets Manager database connection is working perfectly.');
    console.log('🚀 Ready for production vote recording!');
    
  } catch (error) {
    console.error('\n❌ Connection test failed!');
    console.error('Error details:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('credentials')) {
        console.log('\n💡 Suggestion: Check your AWS credentials and Secrets Manager permissions');
      } else if (error.message.includes('password authentication failed')) {
        console.log('\n💡 Suggestion: Verify the credentials stored in Secrets Manager');
      } else if (error.message.includes('could not connect to server')) {
        console.log('\n💡 Suggestion: Check security group settings and public accessibility');
      } else if (error.message.includes('ETIMEDOUT') || error.message.includes('ENOTFOUND')) {
        console.log('\n💡 Suggestion: Check network connectivity and security group rules');
      }
    }
    
    process.exit(1);
  } finally {
    await closePool();
  }
}

// Run the test
testSecretsManagerConnection();
