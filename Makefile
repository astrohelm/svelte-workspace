mode := dev
container := container

clean:
	rm -rf ./node_modules yarn.lock package-lock.json ./dist ./build

compose-build:
	@echo "Building ${mode}"
	docker-compose -f docker-compose.${mode}.yml build

compose-up:
	@echo "${mode} container initialized"
	docker-compose -f docker-compose.${mode}.yml up -d

compose-stop:
	@echo "Closing ${mode} container"
	docker-compose -f docker-compose.${mode}.yml stop

compose-down:
	@echo "Attempt to remove ${mode} container"
	docker-compose -f docker-compose.${mode}.yml down  --remove-orphans

docker-build:
	@echo "Building ${mode}"
	docker build . -f ./Dockerfile.${mode} -t ${container}

docker-up:
	@echo "Building ${mode}"
	docker run -d -p 3000:3000 --env-file=./config/env/.env.production -v type=bind `pwd`:/opt/app --name ${container} ${container}

docker-stop:
	@echo "Closing ${mode}"
	docker stop ${container}

docker-clean:
	@echo "Cleaning docker"
	docker system prune -a
