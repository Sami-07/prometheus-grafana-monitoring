# Simple Monitoring Logs

A lightweight monitoring solution built with Express.js, Prometheus, Grafana and Bun. This project demonstrates how to implement basic application monitoring with metrics collection and visualization.

## Features

- HTTP request monitoring
- Active requests tracking
- Request duration measurements
- Prometheus metrics endpoint
- Grafana dashboard
- Docker support for easy deployment

## Metrics Collected

The application collects the following metrics:

- `http_requests_total`: Counter of total HTTP requests by method, route, and status code
- `http_request_duration_seconds`: Histogram of request durations
- `active_requests`: Gauge showing current number of active requests

## Prerequisites

- [Bun](https://bun.sh) v1.2.2 or later
- Docker and Docker Compose (optional, for containerized deployment)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sami-07/prometheus-grafana-monitoring
cd prometheus-grafana-monitoring
```

2. Install dependencies:
```bash
bun install
```

## Running the Application

### Local Development

```bash
bun run index.ts
```

The server will start on port 3000.

### Docker Deployment

```bash
docker-compose up
```

This will start both the application and Prometheus server.

## Available Endpoints

- `GET /`: Hello World endpoint
- `GET /cpu`: Simulated CPU-intensive endpoint
- `GET /metrics`: Prometheus metrics endpoint

## Monitoring

The application exposes metrics in Prometheus format at the `/metrics` endpoint. You can:

1. Access metrics directly: `http://localhost:3000/metrics`
2. Configure Prometheus to scrape these metrics using the provided `prometheus.yml`
3. Visualize the metrics using tools like Grafana

## Project Structure

```
.
├── index.ts              # Main application entry point
├── middlewares/         # Express middleware
├── metrics/            # Prometheus metrics definitions
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile         # Application Dockerfile
└── prometheus.yml     # Prometheus configuration
```
