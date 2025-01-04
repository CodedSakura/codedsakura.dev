FROM pandoc/core AS builder

WORKDIR /app

COPY . .

RUN pandoc camera/index.md -so camera/index.html & \
    pandoc music/index.md -so music/index.html & \
    pandoc pc/index.md -so pc/index.html

FROM nginx

COPY --from=builder /app /usr/share/nginx/html
