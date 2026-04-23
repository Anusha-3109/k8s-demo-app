FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:exe

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/dist/app /app/app
RUN chmod +x /app/app

ENV PORT=3000
EXPOSE 3000

CMD ["/app/app"]
