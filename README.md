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

## Generate MochaAwesome Reports

You can also generate MochaAwesome reports using the following commands:

```bash
npm run merge-reports
npm run generate-report
```

This will merge and generate MochaAwesome HTML reports in the `mochareports` directory.

## Assumptions

1. The temperature on the home page changes on every refresh of the page.
2. The home page of the web application under test displays the temperature that is either below 19 degrees or above 34 degrees.
3. The valid card details from stripe work without any failure.
4. The 5% payment transaction failure is considered to be an expected behavior; hence, the assertion is set to true.

## Test Scenarios Explained

### Scenario 1: Hot Temperatures (Above 34 degrees)

1. The reload call in a recursive function ensures that the test always gets the temperature above 34 degrees.
2. Once the temperature condition is satisfied, the page is navigated to the sunscreen shopping page.
3. The cheapest of the SPF-50 and SPF-30 are noted (aliased for further verification) and added to the cart.
4. Navigating to the cart page, the items in the cart and total price are verified.
5. Payment is made by entering valid card details from stripe.
6. The payment transaction status is verified.

### Scenario 2: Cold Temperatures (Below 19 degrees)

1. The reload call in a recursive function ensures that the test always gets the temperature below 19 degrees.
2. Once the temperature condition is satisfied, the page is navigated to the moisturizer shopping page.
3. The cheapest of the Aloe and Almond are noted (aliased for further verification) and added to the cart.
4. Navigating to the cart page, the items in the cart and total price are verified.
5. Payment is made by entering valid card details from stripe.
6. The payment transaction status is verified.

Feel free to refer to these assumptions and test scenarios for a better understanding of the automation tests.
