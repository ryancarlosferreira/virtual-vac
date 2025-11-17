# Etapa 1 — Build do Next.js
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Etapa 2 — Runtime mínimo
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Apenas o necessário para rodar
COPY --from=builder /app/package*.json ./
RUN npm install --production --ignore-scripts

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
