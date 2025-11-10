# Stage 1: Build the Angular application
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration=production

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist/billing-frontend/browser/* /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]