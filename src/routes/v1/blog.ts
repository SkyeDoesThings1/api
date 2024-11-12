import express, { type Request, type Response } from "express";
import { BlogPost } from "@/db/entities/blog";
import { db } from "@/db/db";

const router = express.Router();

// Create a new blog post
// TODO: Everything ♥♥
router.post("/", async (req: Request, res: Response) => {});

export { router };