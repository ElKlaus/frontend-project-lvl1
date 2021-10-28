install: # установить зависимости
	npm ci

brain-games: # запуск bin/brain-games.js
	node src/bin/brain-games.js

publish: # учебная публикация пакета
	npm publish --dry-run
lint: # запустить линтер
	npx eslint .