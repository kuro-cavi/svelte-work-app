FROM node:22-bookworm

RUN npm install -g pnpm@9.12

RUN node --version \
    && npm --version \
    && pnpm --version

RUN pnpm config set store-dir ./.pnpm-store
