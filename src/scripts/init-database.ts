// Database initialization script
// Run this once to set up your database tables

import { initializeVotesTable, testConnection } from '@/services/database-vote-service';
import { getPool, closePool } from '@/lib/database/config';

async function initializeDatabase() {
  console.log('🚀 Starting database initialization...');
  
  try {
    // Test connection first
    console.log('📡 Testing database connection...');
    const isConnected = await testConnection();
    
    if (!isConnected) {
      console.error('❌ Database connection failed. Please check your environment variables.');
      process.exit(1);
    }
    
    console.log('✅ Database connection successful');
    
    // Initialize tables
    console.log('📋 Creating votes table...');
    await initializeVotesTable();
    console.log('✅ Votes table created successfully');
    
    console.log('🎉 Database initialization completed successfully!');
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  } finally {
    await closePool();
  }
}

// Run if this file is executed directly
if (require.main === module) {
  initializeDatabase();
}

export { initializeDatabase };
