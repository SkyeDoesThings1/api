import { router as helloWorld } from "./v1/helloWorld";
import { Router } from "express";

interface Route {
    name: string;
    path: string;
    route: Router;
};

// Array of routes to be exported
export const routes: Route[] = [
    {
        name: "Hello World",
        path: "/v1/helloworld",
        route: helloWorld,
    },
];