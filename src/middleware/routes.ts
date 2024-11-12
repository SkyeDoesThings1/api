import { logger } from "@utils/logger";
import { routes } from "../routes/exports";
import express, { type Router } from "express";

const middleware = express();

// Function to import all the routes and stuff
for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    logger.attempt(`Attempting to import '${route.name}' routes at '${route.path}'...`);
    try {
        middleware.use(route.path, route.route);
        logger.success(`Successfully imported '${route.name}' routes at '${route.path}'!`);
    } catch (e) {
        logger.error(`Could not import '${route.name}' routes at '${route.path}'! ${e instanceof Error ? e.message : e}`);
    };
};

export { middleware }