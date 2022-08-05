.PHONY: install
install: ## Install dependencies
	npm i

.PHONY: start
start: ## Run the server in production mode
	npm start 

.PHONY: dev
dev: ## Run the server in with --watch
	npm run start:dev

.PHONY: debug
debug: ## Run the server in with --watch and --debug
	npm run start:debug

.PHONY: build
build: ## Build the production version of the application
	npm run build

.PHONY: start-prod
start-prod: ## Run the server in production mode
	npm run start:prod 

.PHONY: test
test: ## Test all the things
	npm run test

.PHONY: test-watch
test-watch: ## Run tests in watch mode
	npm run test:watch

.PHONY: lint
lint: ## Run lint checks
	npm run lint
