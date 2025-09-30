# Stage 1: Install dependencies
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Stage 2: Build the application
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/package.json .
COPY --from=builder /app/src/data/votes.json ./src/data/votes.json

# Expose the port the app runs on
EXPOSE 9002

# Run the app as a non-root user
USER nextjs

# The start command from package.json is `next start --port 9002 --hostname 0.0.0.0`
# The standalone output includes a server.js file to run the app.
# We will use that directly.
CMD ["node", "server.js"]
