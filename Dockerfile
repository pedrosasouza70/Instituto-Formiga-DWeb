# Use the official Node.js image
FROM node:22-alpine3.18

# Set the working directory
WORKDIR /webapp

# Install git
RUN apk update && apk add --no-cache git && npm install -g pnpm@8.15.6

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["sh", "-c", "pnpm install && pnpm run dev"]