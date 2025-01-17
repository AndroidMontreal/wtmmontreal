# Makefile

# Variables
IMAGE_NAME = wtm-next-app
CONTAINER_NAME = wtm-app
PORT = 3000

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker-compose up -d

stop:
	docker stop $(CONTAINER_NAME)

rm:
	docker rm $(CONTAINER_NAME)

clean:
	docker rm -f $(CONTAINER_NAME) || true

rebuild: clean build run