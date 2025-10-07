import { NextResponse } from 'next/server';
import { getRedisClient } from '@/lib/redis';

export async function GET() {
  try {
    // Skip Redis connection during build time
    if (process.env.NODE_ENV === 'production' && !process.env.REDIS_URL && !process.env.REDIS_HOST) {
      return NextResponse.json({ 
        message: 'Redis not configured for build time',
        configuration: {
          hasRedisUrl: false,
          hasIndividualConfig: false,
          configType: 'Not configured',
          buildTime: true
        }
      });
    }
    
    const redis = await getRedisClient();
    
    // Test Redis connection
    await redis.set('test-key', 'Hello Redis!');
    const value = await redis.get('test-key');
    
    // Get Redis info
    const info = await redis.info('server');
    
    return NextResponse.json({ 
      message: 'Redis connection successful!',
      testValue: value,
      configuration: {
        hasRedisUrl: !!process.env.REDIS_URL,
        hasIndividualConfig: !!(process.env.REDIS_HOST || process.env.REDIS_PASSWORD),
        configType: process.env.REDIS_URL ? 'REDIS_URL' : 'Individual variables',
        host: process.env.REDIS_HOST || 'localhost (default)',
        port: process.env.REDIS_PORT || '6379 (default)',
        hasPassword: !!process.env.REDIS_PASSWORD,
        hasUsername: !!process.env.REDIS_USERNAME
      },
      serverInfo: info.split('\r\n').slice(0, 5).join('\n') // First few lines of server info
    });
    
  } catch (error) {
    console.error('Redis connection error:', error);
    return NextResponse.json({ 
      error: 'Redis connection failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      configuration: {
        hasRedisUrl: !!process.env.REDIS_URL,
        hasIndividualConfig: !!(process.env.REDIS_HOST || process.env.REDIS_PASSWORD),
        configType: process.env.REDIS_URL ? 'REDIS_URL' : 'Individual variables',
        host: process.env.REDIS_HOST || 'localhost (default)',
        port: process.env.REDIS_PORT || '6379 (default)',
        hasPassword: !!process.env.REDIS_PASSWORD,
        hasUsername: !!process.env.REDIS_USERNAME
      }
    }, { status: 500 });
  }
}
