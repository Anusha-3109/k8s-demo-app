FROM alpine:latest
 
WORKDIR /app

COPY dist/app /app/app
RUN chmod +x /app/app

ENV PORT=3000
EXPOSE 3000

CMD ["/app/app"]
