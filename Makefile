# Запуск та оновлення контейнерів
build:
	docker compose up -d --build

#Запустити контейнери
up:
	docker compose up -d

# Зупинка всіх контейнерів
down:
	docker compose down

# Перезапуск контейнерів
restart:
	docker compose restart

# Вхід у контейнер PHP CLI
cli:
	docker exec -it design-news-ai-php-cli bash

# Вхід у контейнер Postgres
db:
	docker exec -it postgres psql -U admin -d design_news_ai
