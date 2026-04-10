# Use Node 20 (stable with Vite + Tailwind)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package.json package-lock.json* ./

# Install deps
RUN npm install

# Copy rest of the app
COPY . .

# Expose Vite port
EXPOSE 3000

# Start dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]