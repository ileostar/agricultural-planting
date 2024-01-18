function loadConfig() {
  // eslint-disable-next-line n/prefer-global/process
  const { env } = process

  return {
    db: {
      database: 'plant',
      host: 'localhost',
      port: Number.parseInt(env.TYPEORM_PORT, 10) || 3306,
      username:'root',
      password: 'root',
    },
  }
}

export default loadConfig
