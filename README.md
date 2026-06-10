# Logging Middleware

## Overview

This project implements a reusable logging middleware that integrates with the AffordMed Evaluation Logging API. The middleware provides a centralized logging function that validates log data and sends it to the remote logging service.

The goal is to simplify application logging by exposing a single function:

```javascript
Log(stack, level, packageName, message);
```

---

## Features

* Centralized logging functionality
* Input validation for stack, level, and package values
* Integration with AffordMed Logging API
* Error handling using try-catch
* Environment variable support for secure token management
* Reusable across backend and frontend applications

---

## Project Structure

```text
logging-middleware/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
│
└── src/
    ├── constants.js
    ├── logger.js
    └── index.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd logging-middleware
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
ACCESS_TOKEN=your_access_token_here
```

---

## Usage

Import the logging function:

```javascript
import { Log } from "./src/index.js";
```

Example:

```javascript
await Log(
  "backend",
  "error",
  "handler",
  "received string, expected bool"
);
```

---

## Supported Stacks

* backend
* frontend

---

## Supported Log Levels

* debug
* info
* warn
* error
* fatal

---

## Backend Packages

* cache
* controller
* cron_job
* db
* domain
* handler
* repository
* route
* service

---

## Common Packages

* auth
* config
* middleware
* utils

---

## API Integration

The middleware sends logs to:

```text
http://4.224.186.213/evaluation-service/logs
```

Request format:

```json
{
  "stack": "backend",
  "level": "error",
  "package": "handler",
  "message": "received string, expected bool"
}
```

---

## Error Handling

The middleware validates inputs before making API calls. Any errors during validation or API communication are caught and handled gracefully without crashing the application.

---

## Sample Response

```json
{
  "logID": "generated-log-id",
  "message": "log created successfully"
}
```

---

## Author

**Isha Vashishtha**
Roll Number: 2315800036
