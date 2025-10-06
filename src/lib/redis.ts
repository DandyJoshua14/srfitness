import { createClient } from "redis";

let redis: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redis) {
    // Use environment variable first, then fallback to hardcoded URL
    const redisUrl = process.env.REDIS_URL || "redis://default:cLKj9pBXjACBwY65MqhoEIldTc8IWKeA@redis-13335.c16.us-east-1-3.ec2.redns.redis-cloud.com:13335";
    
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
