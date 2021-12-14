<div align="center">
    <h1>API REST</h1>
</div>

## Development environment

Firstly, clone this repository:
```bash
$ git clone
```

### Install dependencies
```bash
$ yarn install
```

### Configuration

Copy the basic `.env.example` to new file `.env` and write your preferences of connections database.

```bash
$ cp .env.example .env
```

### Run migrations
```bash
$ yarn dev:migrate:latest
```

### Start dev server
```bash
$ yarn dev
```

## Production build
Run the following commands, same sequence:

Up containers
```bash
$ docker-compose up --build -d
```

Create extension on database to add uuid autogenerate. Replace the variable with our database connections settings.
```bash
$ docker exec -it postgres_db_api psql "host=YOUR_DATABASE_HOST port=YOUR_DATABASE_PORT dbname=YOUR_DATABASE_NAME user=YOUR_DATABASE_USER password=YOUR_DATABASE_PASSWORD" -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
```

Running migrations on productions build.
```bash
$ docker-compose run api /bin/sh -c "yarn migrate:latest"
```

