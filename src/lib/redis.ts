import { createClient } from "redis";

let redis: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redis) {
    // Build Redis URL from environment variables only - no hardcoded fallbacks
    let redisUrl = process.env.REDIS_URL;
    
    if (!redisUrl) {
      // Build URL from individual environment variables
      const host = process.env.REDIS_HOST;
      const port = process.env.REDIS_PORT;
      const password = process.env.REDIS_PASSWORD;
      const username = process.env.REDIS_USERNAME;
      
      if (!host) {
        throw new Error('Redis configuration missing. Please set REDIS_URL or REDIS_HOST environment variable.');
      }
      
      if (password && username) {
        redisUrl = `redis://${username}:${password}@${host}:${port || '6379'}`;
      } else if (password) {
        redisUrl = `redis://:${password}@${host}:${port || '6379'}`;
      } else {
        redisUrl = `redis://${host}:${port || '6379'}`;
      }
    }
    
    console.log('Connecting to Redis with URL:', redisUrl.replace(/:[^:@]*@/, ':***@')); // Log URL with masked password
    
    redis = createClient({ 
      url: redisUrl
    });
    
    redis.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });
    
    await redis.connect();
  }
  
  return redis;
}

export async function closeRedisConnection() {
  if (redis) {
    await redis.quit();
    redis = null;
  }
}
