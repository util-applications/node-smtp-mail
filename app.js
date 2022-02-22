const server = require('./server/server');
const startup = require('./server/startup');
const env = require('./src/env/environment');

// Start and Auto register - Application routes
startup.start();
startup._routing.forEach(r => server.use(r.entryPoint, r.route));

if (!env)
  throw new Error('Arquivo de variáveis de ambiente não encontrado - Buscando em /src/env/environment.js');

if (!env.port)
  throw new Error('Uma porta deve ser configurada nas variáveis de ambiente do projeto (env/environment.js)');

// Start application
server.listen(env.port, 
  () => console.info(`${env.applicationName ?? 'Application'} is listening on ${env.port} port`));