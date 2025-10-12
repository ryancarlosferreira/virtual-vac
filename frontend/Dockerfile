FROM node:18-alpine AS builder
WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Build SSR
RUN npm run build

# Rodar no Node
EXPOSE 3000
CMD ["npm", "start"]
