FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:exe

FROM node:20-bookworm-slim

WORKDIR /app

COPY --from=builder /app/dist/app /app/app

ENV PORT=3000
EXPOSE 3000

CMD ["/app/app"]
