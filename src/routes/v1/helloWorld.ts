import express, { type Request, type Response } from "express";

const router = express.Router();

// Hello world endpoint
router.get("/", (req: Request, res: Response) => {
    res.json({ response: "Hello, World!" });
});

export { router };