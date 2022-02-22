const routeRegister = require('../../core/helpers/route-register');
const c = require("../controllers/main-controller");

/**
 * Sub-rotas registradas para o entrypoint "main"
 */
const router = routeRegister("../controllers/main-controller");

// Rotas
router.get('/', (req, res, next) => c(req, res, next).main());

module.exports = router;