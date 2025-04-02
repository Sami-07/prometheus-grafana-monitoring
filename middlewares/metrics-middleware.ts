import type { NextFunction, Request, Response } from "express";
import { activeRequestsGauge } from "../metrics/active-requests";
import { requestCounter } from "../metrics/request-count";
import { httpRequestDurationHistogram } from "../metrics/request-time";

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.path != "/metrics") {
        activeRequestsGauge.inc();
    }
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`Request took ${duration}ms`);

        // Increment request counter
        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });

        httpRequestDurationHistogram.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        }, duration);

        if (req.path != "/metrics") {
            activeRequestsGauge.dec();
        }
    });
    next();
}