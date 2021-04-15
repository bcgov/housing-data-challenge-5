[![img](https://img.shields.io/badge/Lifecycle-Retired-d45500)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

---

# Housing Data Challenge - Foundry Spatial

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

## Running the app on your system

Requirements:

- [yarn](https://yarnpkg.com/) for building the project
- [docker-compose](https://www.docker.com/) to deploy with Docker

### Build the project

``` bash
yarn run build
```

### Build & run with Docker/Docker-Compose

First, use `docker-compose` to "compile":

``` bash
docker-compose up builder
```

To run the application on your system, listening on port 80, use docker-compose again:

``` bash
docker-compose up web
```

Or manually build and run the Dockerfile in the project root.
