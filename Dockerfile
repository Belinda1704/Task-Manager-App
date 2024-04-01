# Use a lightweight base image
FROM docker
FROM nginx:alpine

# Copy the web application files into the container
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY --from=docker/buildx-bin /buildx /usr/libexec/docker/cli-plugins/docker-buildx

RUN docker buildx version

# Expose port 80
EXPOSE 80
