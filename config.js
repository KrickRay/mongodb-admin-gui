var url = require('url');

if (typeof process.env.MONGODB_PORT === 'string') {
	var mongoConnection = url.parse(process.env.MONGODB_PORT);
	process.env.ME_CONFIG_MONGODB_SERVER = mongoConnection.hostname;
	process.env.ME_CONFIG_MONGODB_PORT = mongoConnection.port;
}

module.exports = {
  mongodb: {
    server: process.env.ME_CONFIG_MONGODB_SERVER || 'localhost',
    port: process.env.ME_CONFIG_MONGODB_PORT || 27017,
    autoReconnect: true,
    poolSize: 4,
    admin: true,
    auth: [
    ],
    adminUsername: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME || '',
    adminPassword: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD || '',
    whitelist: [],
    blacklist: []
  },

  site: {
    host: '0.0.0.0',
    port: 8081,
    cookieSecret: process.env.ME_CONFIG_SITE_COOKIESECRET || 'cookiesecret',
    sessionSecret: process.env.ME_CONFIG_SITE_SESSIONSECRET || 'sessionsecret',
    cookieKeyName: 'mongo-express',
    sslEnabled: process.env.ME_CONFIG_SITE_SSL_ENABLED || false,
    sslCert: process.env.ME_CONFIG_SITE_SSL_CRT_PATH || '',
    sslKey: process.env.ME_CONFIG_SITE_SSL_KEY_PATH || ''
  },

  options: {
    documentsPerPage: 10,
    editorTheme: process.env.ME_CONFIG_OPTIONS_EDITORTHEME || 'rubyblue',
    cmdType: 'eval',
    subprocessTimeout: 300,
    readOnly: true
  },

  defaultKeyNames: {
  }
};
