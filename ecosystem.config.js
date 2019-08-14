module.exports = {
  apps: [{
    name: 'BLOOD-API',
    script: './bin/www',


    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '400M',
    env: {
      NODE_ENV: 'development',
      PORT: 6000

    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 7000
    }
  }],

  deploy: {
    production: {
      user: 'mkcodergr',
      host: process.env.DEPLOY_HOST,
      ref: 'origin/master',
      repo: 'git@github.com:kounelios13/blood-measurement-api.git',
      path: '/home/mkcodergr/apps/blood-measurement-api',
      // "pre-deploy-local": "cd $HOME/apps/blood-measurement-api && mkdir -p source",
      'post-deploy': 'cd $HOME/apps/blood-measurement-api && echo dir is:$(pwd) && $(npm config get prefix)/bin/pm2 reload $HOME/apps/blood-measurement-api/ecosystem.config.js --env production --update-env'
    },
    development: {
      user: 'mkcodergr',
      host: process.env.DEPLOY_HOST,
      ref: 'origin/development',
      repo: 'git@github.com:kounelios13/blood-measurement-api.git',
      path: '/home/mkcodergr/apps/blood-measurement-api',
      // "pre-deploy-local": "cd $HOME/apps/blood-measurement-api && mkdir -p source",
      'post-deploy': 'cd $HOME/apps/blood-measurement-api && echo dir is:$(pwd) && $(npm config get prefix)/bin/pm2 reload $HOME/apps/blood-measurement-api/ecosystem.config.js  --update-env '
    }
  }
};