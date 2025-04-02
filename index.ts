import express from "express";
import { metricsMiddleware } from "./middlewares/metrics-middleware";
import promClient from "prom-client";

const app = express();

app.use(metricsMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/cpu", async (req, res) => {

    await new Promise(resolve => setTimeout(resolve, Math.random() * 4000));
    res.send(`Hello World`);
});

app.get("/metrics", async (req, res) => {
    const metrics = await promClient.register.metrics();
    res.set("Content-Type", promClient.register.contentType);
    res.end(metrics);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});