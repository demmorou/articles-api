<div align="center">
    <h1>API REST</h1>
</div>

## Docs

See the diagram database

<img src="./docs/db_diagram.png" />

See the Insomnia collection

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Articles%20Api&uri=https%3A%2F%2Fgithub.com%2Fdeusimardamiao%2Farticles-api%2Fblob%2Fmaster%2Fdocs%2Finsomnia-collection.json)

## Development environment

Firstly, clone this repository:
```terminal
$ git clone
```

### Install dependencies
```terminal
$ yarn install
```

### Configuration

Copy the basic `.env.example` to new file `.env` and write your preferences of connections database.

```terminal
$ cp .env.example .env
```

### Run migrations
```terminal
$ yarn dev:migrate:latest
```

### Start dev server
```terminal
$ yarn dev
```

## Production build
Run the following commands, same sequence:

Up containers
```terminal
$ docker-compose up --build -d
```

Create extension on database to add uuid autogenerate. Replace the variable with our database connections settings.
```terminal
$ docker exec -it postgres_db_api psql "host=YOUR_DATABASE_HOST port=YOUR_DATABASE_PORT dbname=YOUR_DATABASE_NAME user=YOUR_DATABASE_USER password=YOUR_DATABASE_PASSWORD" -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
```

Running migrations on productions build.
```terminal
$ docker-compose run api /bin/sh -c "yarn migrate:latest"
```

