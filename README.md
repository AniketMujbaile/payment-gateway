# Payment Gateway
 
## Overview
A scalable and secure payment gateway service.

## Features
- Create a payment
- Process a payment
- Retrieve payment status
- Handle refunds

## Setup

### Prerequisites
- Node.js
- MongoDB
- Docker

### Installation
   Clone the repository
   ```bash
   git clone <repository_url>
   cd payment-gateway
   ```


### Install dependencies

```bash
npm install
```

### Set up environment variables

Create a .env file in the root directory
Add the following variables:
```ENV
MONGO_URI=mongodb://localhost:27017/payment_gateway
PORT=5000
```

### Run the application
```bash
npm start
```

### Using Docker
Build and run the Docker container
```bash
docker-compose up --build
```

## API Documentation
   
- `POST http://localhost:3000/payments`:  Create a payment

- `POST http://localhost:3000/payments/:id/process`:  Process a payment

- `GET http://localhost:3000/payments/:id/status`:  Retrieve payment status

- `POST http://localhost:3000/payments/:id/refund`:  Handle refunds
