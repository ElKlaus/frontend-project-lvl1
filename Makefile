install: # установить зависимости
	npm ci

brain-games: # запуск bin/brain-games.js
	node bin/brain-games.js

publish: # учебная публикация пакета
	npm publish --dry-run