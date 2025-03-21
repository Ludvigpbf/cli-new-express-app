const infoRoutes = require("./routes/infoRoutes");

const mainRouter = express.Router();

mainRouter.use("/info", infoRoutes);
// add more routes here

module.exports = mainRouter;