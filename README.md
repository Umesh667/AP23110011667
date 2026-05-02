# Backend Evaluation Project

##  Overview

This project is a backend application built using Node.js and Express.
It demonstrates API development, logging middleware integration, and external API usage.

---

##  Features

* REST API using Express.js
* Custom Logging Middleware
* External API integration (Depots API)
* Structured backend architecture (routes, controllers, services)
* Error handling and debugging

---

##  Project Structure

```
AP23110011667/
│
├── logging_middleware/
│   ├── logger.js
│
├── vehicle_maintenance_scheduler/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── config.js
│   ├── index.js
│
├── screenshots/
├── notification_system_design.md
```

---

##  Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd AP23110011667
```

### 2. Install dependencies

```
cd vehicle_maintenance_scheduler
npm install
```

### 3. Run the server

```
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

##  Authentication

* Uses Bearer Token authentication
* Token is stored in `config.js`

---

##  API Endpoints

### 1. Test API

```
GET /test
```

Response:

```
{ "message": "API working" }
```

---

### 2. Add Vehicle

```
POST /api/vehicle
```

Request Body:

```
{
  "name": "Car",
  "type": "SUV"
}
```

Response:

```
{
  "id": 123456789,
  "name": "Car",
  "type": "SUV"
}
```

---

##  Logging Middleware

* Logs are sent to external logging API
* Used in:

  * Route layer
  * Controller layer
  * Service layer

---

##  Testing

* APIs tested using Postman
* Verified request, response, and status codes

---

##  Screenshots

Screenshots of API testing are available in the `screenshots/` folder.

---

## 📄 Design Document

Detailed system design is available in:

```
notification_system_design.md
```

---

##  Conclusion

This project demonstrates backend development fundamentals including API design, logging, and integration with external services.

---
