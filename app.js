const server = require('./server/server');
const env = require('./src/env/environment');

// Application routes
const ROUTES = require('./routes/routes');

// Auto register application routes
ROUTES.forEach(r => server.use(r.entryPoint, r.route));

if (!env)
  throw new Error('Arquivo de variáveis de ambiente não encontrado - Buscando em /src/env/environment.js');

if (!env.port)
  throw new Error('Uma porta deve ser configurada nas variáveis de ambiente do projeto (env/environment.js)');

// Start application
server.listen(env.port, 
  () => console.info(`${env.applicationName ?? 'Application'} is listening on ${env.port} port`));