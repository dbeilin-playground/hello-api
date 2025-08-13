FROM node:20-alpine

WORKDIR /app

# Accept build args
ARG VERSION=v1.0.0
ARG BUILD_DATE
ARG GIT_COMMIT

# Set environment variables
ENV VERSION=${VERSION}
ENV BUILD_DATE=${BUILD_DATE}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY server.js ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

USER nodejs

EXPOSE 3000

CMD ["npm", "start"]
