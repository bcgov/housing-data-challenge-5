# housing-viz

> BCIC housing data visualization

Demo link: http://housing-viz-demo.foundryspatial.com/

## Development

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## Run the app on your system

Requirements:

- [yarn](https://yarnpkg.com/) for building the project
- [docker-compose](https://www.docker.com/) to deploy with Docker

### Build the project

``` bash
yarn run build
```

### Build & run the Docker image

``` bash
docker-compose build
```
To run the application on your system, listening on port 80, use `docker-compose`:

``` bash
docker-compose up
```

Or manually build and run the Dockerfile in the project root.
