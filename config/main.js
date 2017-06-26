const path = require('path');
const rootPath = require('app-root-path');      // path.normalize(__dirname + '/..');
const NODE_ENV = process.env.NODE_ENV || 'development';
const env_var = require("./environment_vars");

var config = {
   "development": {
      "host": "localhost",    // actual hostname for resource hosting
      "dialect": "sqlite",
      "storage": "./db.development.sqlite",
      "mediaUrl": "http://localhost:3001"    // 미디어/이미지 서버 URL
      // "mediaUrl": "http://image.cozyhouzz.co.kr:3000"     // 미디어/이미지 서버 URL
   },

   "test": {
   },

   "production": {
      "username": "root",
      "password": "hitit113112!",
      "database": "cozyhouzz",
      "host": "api.cozyhouzz.co.kr",    // The host of the relational database.
      "hostName": "api.cozyhouzz.co.kr",    // actual hostname for resource hosting,
      "mediaUrl": "http://media.cozyhouzz.co.kr:3000",     // 미디어/이미지 서버 URL
      "dialect": "mysql",
      "pool": {
         "max": 50,
         "min": 10,
         "idle": 10000
      },
      // Configuring Mailgun API for sending transactional email
      "mailgun_priv_key": "mailgun private key here",
      // Configuring Mailgun domain for sending transactional email
      "mailgun_domain": "mailgun domain here",
      // Mailchimp API key
      "mailchimpApiKey": "mailchimp api key here",
      // Stripe API key
      "stripeApiKey": "stripe api key goes here"
   }
}

config[NODE_ENV].secret = env_var.AUTH0_CLIENT_SECRET;  // Secret key for JWT signing and encryption
config[NODE_ENV].root = rootPath.path;
config[NODE_ENV].app = {
   name: env_var.APP_NAME
};

config[NODE_ENV].krpano = {
   WIN_PATH: env_var.KRPANO_WIN_PATH,
   LINUX_PATH: env_var.KRPANO_LINUX_PATH,
   VTOUR_CONFIG_PATH: env_var.VTOUR_CONFIG_PATH,
   PANOTOUR_PATH: env_var.PANOTOUR_PATH
}

config[NODE_ENV].resource = {
   DIR: env_var.RESOURCE_DIR,
   ATTACHED_DIR: env_var.ATTACHED_DIR,
   MEDIAS_DIR: env_var.MEDIAS_DIR,
   IMAGES_DIR: env_var.IMAGES_DIR,
   VIDEOS_DIR: env_var.VIDEOS_DIR,
   VRIMAGES_DIR: env_var.VRIMAGES_DIR,
   VTOURS_DIR: env_var.VTOURS_DIR,
   POSTS_DIR: env_var.POSTS_DIR,
   USERS_DIR: env_var.USERS_DIR,
   TEMP_DIR: env_var.TEMP_DIR,
}

config[NODE_ENV].auth0 = {
   DOMAIN: env_var.AUTH0_DOMAIN,
   CLIENT_ID: env_var.AUTH0_CLIENT_ID,
   CALLBACK_URL: env_var.AUTH0_CALLBACK_URL,
   JWKS_URI: env_var.AUTH0_JWKS_URI,
   IDENTIFIER: env_var.AUTH0_IDENTIFIER,
   ISSUER: env_var.AUTH0_ISSUER,
   EXPIRES_IN: env_var.AUTH0_JWT_EXPIRATION,
   ALGORITHM: env_var.AUTH0_ALGORITHM
}

module.exports = config[NODE_ENV];
