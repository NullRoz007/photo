module.exports = {
  apps : [
    {
        name: "Medusa Backend",
        script: "../backend.js",
        cwd: "./martin-photography/"
    },  
    {
      name: "Web Server",
      script: "../frontend.js",
      cwd: "./martin-photography-frontend/",
      watch: true,
    },
    {
      name: "Medusa Admin",
      script: "../admin.js",
      cwd: "./medusa-admin/"
    },
    {
      name: "MinIO",
      script: "../minio.js",
      cwd: "./minio/"
    }
],
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
