module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};


// module.exports = {
//   apps : [{
//     script: 'index.js',
//     watch: '.'
//   }, {
//     script: './service-worker/',
//     watch: ['./service-worker']
//   }],

//   deploy : {
//     production : {
//       user : 'SSH_USERNAME',
//       host : 'SSH_HOSTMACHINE',
//       ref  : 'origin/master',
//       repo : 'GIT_REPOSITORY',
//       path : 'DESTINATION_PATH',
//       'pre-deploy-local': '',
//       'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//       'pre-setup': ''
//     }
//   }
// };

// module.exports = {
//   apps: [
//     {
//       name: 'your-app-name', // Your project name
//       cwd: '/home/ubuntu', // Path to your project
//       script: 'yarn', // For this example we're using npm, could also be yarn
//       args: 'start', // Script to start the Strapi server, `start` by default
//       env: {
//         APP_KEYS: 'your app keys', // you can find it in your project .env file.
//         API_TOKEN_SALT: 'your api token salt',
//         ADMIN_JWT_SECRET: 'your admin jwt secret',
//         JWT_SECRET: 'your jwt secret',
//         NODE_ENV: 'production',
//         DATABASE_HOST: 'your-unique-url.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
//         DATABASE_PORT: '5432',
//         DATABASE_NAME: 'strapi', // DB name under 'Configuration' tab
//         DATABASE_USERNAME: 'postgres', // default username
//         DATABASE_PASSWORD: 'Password',
//         AWS_ACCESS_KEY_ID: 'aws-access-key-id',
//         AWS_ACCESS_SECRET: 'aws-access-secret', // Find it in Amazon S3 Dashboard
//         AWS_REGION: 'aws-region',
//         AWS_BUCKET_NAME: 'my-project-bucket-name',
//       },
//     },
//   ],
// };