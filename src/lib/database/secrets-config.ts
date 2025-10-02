import { Pool } from 'pg';
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

// Cache for database credentials
let cachedCredentials: any = null;
let pool: Pool | null = null;

// Get database credentials from AWS Secrets Manager
async function getDatabaseCredentials() {
  if (cachedCredentials) {
    return cachedCredentials;
  }

  const secret_name = "prod";
  const client = new SecretsManagerClient({
    region: "eu-north-1",
  });

  try {
    console.log('🔐 Fetching database credentials from AWS Secrets Manager...');
    
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT",
      })
    );

    if (!response.SecretString) {
      throw new Error('No secret string found in Secrets Manager response');
    }

    const secret = JSON.parse(response.SecretString);
    console.log('✅ Successfully retrieved credentials from Secrets Manager');
    
    // Cache the credentials
    cachedCredentials = secret;
    return secret;
    
  } catch (error) {
    console.error('❌ Error fetching credentials from Secrets Manager:', error);
    throw error;
  }
}

// Create database configuration from secrets
async function createDbConfig() {
  const credentials = await getDatabaseCredentials();
  
  return {
    host: credentials.host,
    port: credentials.port || 5432,
    database: credentials.dbname || credentials.database || 'postgres',
    user: credentials.username || credentials.user,
    password: credentials.password,
    ssl: { rejectUnauthorized: false }, // Required for AWS RDS
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
}

// Get or create connection pool
export const getPool = async (): Promise<Pool> => {
  if (!pool) {
    console.log('🔄 Creating new PostgreSQL connection pool with Secrets Manager...');
    const dbConfig = await createDbConfig();
    pool = new Pool(dbConfig);
    
    // Handle pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
  }
  
  return pool;
};

// Test database connection with Secrets Manager
export const testConnection = async (): Promise<boolean> => {
  try {
    const pool = await getPool();
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();
    console.log('✅ Database connection successful with Secrets Manager');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
};

// Close the connection pool
export const closePool = async (): Promise<void> => {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('🔒 Database connection pool closed');
  }
};

// Get credentials for debugging (without password)
export const getCredentialsInfo = async () => {
  try {
    const credentials = await getDatabaseCredentials();
    return {
      host: credentials.host,
      port: credentials.port || 5432,
      database: credentials.dbname || credentials.database || 'postgres',
      user: credentials.username || credentials.user,
      passwordSet: !!credentials.password,
    };
  } catch (error) {
    console.error('Error getting credentials info:', error);
    return null;
  }
};
