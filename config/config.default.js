/*
 * @Author: heinan 
 * @Date: 2020-08-27 10:46:30 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-08-27 10:58:24
 */

`use strict`;
const { APP_KEYS } = require('../app/config');
module.exports = (appInfo) => {
  const config = {
    keys: APP_KEYS,
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '12344321',
        database: 'exam3',
      },
      app: true,
      agent: false,
    },
    security: {
      csrf: {
        enable: false
      }
    },
    session: {
      maxAge: 24 * 3600 * 1000,
      httpOnly: true,
      encrypt: true,
    }
  }
  const userConfig = {}
  return {
    ...config,
    ...userConfig
  }
}