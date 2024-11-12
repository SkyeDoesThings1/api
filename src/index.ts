import express from "express";
import { logger, logMiddleware } from "@utils/logger";
import { middleware as routeMiddleware } from "@middleware/routes";
import config from "@config/config.json" with { type: "json" };

const app = express();
const port: number = config.http.port;

app.use(logMiddleware); // Logs all the requests and their status
app.use(routeMiddleware); // Imports all the routes

// Starts the server
app.listen(port, () => {
    logger.info(`Server is running on port: %s!`, port);
});