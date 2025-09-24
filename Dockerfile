# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Clean any existing build artifacts and build the application
RUN rm -rf .next && npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 9002

# Set environment variables
ENV NODE_ENV=production
ENV PORT=9002
ENV HOSTNAME=0.0.0.0

# Start the application
CMD ["npm", "start"]

