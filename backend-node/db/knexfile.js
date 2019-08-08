module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'make_chabo_open_again_dev',
      user: 'mcoa_app',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'make_chabo_open_again_test',
      user: 'mcoa_app',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds-test',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'make_chabo_open_again_staging',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'make_chabo_open_again_prod',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },
}