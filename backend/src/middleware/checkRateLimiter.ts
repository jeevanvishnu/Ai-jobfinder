import { ratelimit } from "./ratelimiter.ts";
import type { Request, Response, NextFunction } from "express";

export const checkRateLimiter = async (req: Request, res: Response, next: NextFunction) => {
    const result = await ratelimit.limit(req.ip as string);
    if (!result.success) {
        return res.status(429).json({ message: "Too many requests" });
    }
    next();
};