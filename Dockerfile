# Install dependencies only when needed
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps

# Rebuild the source code only when needed
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm install -g env-cmd
#RUN env-cmd -f .env.prod 
RUN rm package-lock.json
RUN npm run build && yarn install --production --ignore-scripts --prefer-offline --legacy-peer-deps

# Production image, copy all the files and run next
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/. ./

EXPOSE 80

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
