import { Ratelimit } from "@upstash/ratelimit";
import redis from "../lib/upstash.ts";

export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1m"),
});