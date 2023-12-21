# Beyonnex Cypress Automation Test

Welcome to the Beyonnex Cypress Automation Test task repository! This repository contains Cypress automation tests for the [Weather Shopper](https://weathershopper.pythonanywhere.com/) website, as part of an interview task.

## Prerequisites

Before you start, ensure that you have the following installed on your local machine:

1. [Node.js](https://nodejs.org/) (version 14 recommended since this version waas used while working on this task)
2. [npm](https://www.npmjs.com/) (Node Package Manager)
3. [Docker](https://www.docker.com/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/nithinr36/beyonnex-qa-task.git
cd beyonnex-qa-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Open Cypress Dashboard

```bash
npx cypress open
```

This will open the Cypress dashboard. Select the browser and the specific test file you want to run.

### 4. Run Cypress Tests (Without Opening Dashboard)

```bash
npx cypress run
```

This command runs all Cypress tests without opening the dashboard.

## Docker Setup

### 1. Build Docker Image

```bash
docker build -t beyonnex-cypress-tests:latest .
```

### 2. Run Docker Container

```bash
docker run -i -v "%cd%/mochareports:/tests/mochareports" beyonnex-cypress-tests:latest
```

This command mounts the local `mochareports` directory inside the Docker container for storing MochaAwesome reports.

### 3. Generate MochaAwesome Reports

You can also generate MochaAwesome reports using the following commands:

```bash
npm run merge-reports
npm run generate-report
```

This will merge and generate MochaAwesome HTML reports in the `mochareports` directory.

Feel free to explore and provide the feedback.