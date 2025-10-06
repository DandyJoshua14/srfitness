import { NextResponse } from 'next/server';
import { getRedisClient } from '@/lib/redis';

export async function GET() {
  try {
    const redis = await getRedisClient();
    
    // Test Redis connection
    await redis.set('test-key', 'Hello Redis!');
    const value = await redis.get('test-key');
    
    // Get Redis info
    const info = await redis.info('server');
    
    return NextResponse.json({ 
      message: 'Redis connection successful!',
      testValue: value,
      redisUrl: process.env.REDIS_URL ? 'Environment variable set' : 'Using hardcoded fallback URL',
      hasEnvVar: !!process.env.REDIS_URL,
      serverInfo: info.split('\r\n').slice(0, 5).join('\n') // First few lines of server info
    });
    
  } catch (error) {
    console.error('Redis connection error:', error);
    return NextResponse.json({ 
      error: 'Redis connection failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      redisUrl: process.env.REDIS_URL ? 'Environment variable set' : 'Using hardcoded fallback URL',
      hasEnvVar: !!process.env.REDIS_URL
    }, { status: 500 });
  }
}
