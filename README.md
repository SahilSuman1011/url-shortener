# URL Shortener API

A RESTful API for shortening URLs using Node.js, TypeScript, Express, MongoDB, and NanoID.

---

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [API Endpoints](#api-endpoints)
3. [Assumptions and Design Decisions](#assumptions-and-design-decisions)
4. [Technologies Used](#technologies-used)

---

### Setup Instructions

#### Prerequisites
1. **Node.js**: Ensure that you have Node.js installed (preferably version 18 or later).
2. **MongoDB**: Install MongoDB or set up an Atlas cloud database instance.

#### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd url-shortener

2. **Install Dependencies**:
   ```bash
   npm install

3. **Environment Variables**:
- Create a .env file in the root directory.
- Add the MongoDB connection string
   ```bash
  CONNECTION_STRING=<your_mongodb_connection_string>
  PORT=5001  # Optional, defaults to 5001
   
4. **Build and Run**:
- To compile TypeScript and run the server, use the following commands:
   ```bash
   npm run build
   npm start
- for development with automatic reloading:
  ```bash
  npm run dev

5. **API Base URL**:
   ```bash
   The server will start at http://localhost:5001 by default.
   Assumptions and Design Decisions
   
### API Endpoints 
![image](https://github.com/user-attachments/assets/6ab9b366-e911-44f8-b960-3e64182337ce)

### Sample Requests
![image](https://github.com/user-attachments/assets/fdc049f3-36fb-4795-a42c-0f4435d01827)


### Database Connection:

- The API uses a MongoDB Atlas connection for storing URLs. The connection string is set in .env file.
Short URL Generation:

- The API generates a 10-character unique short URL using nanoid. This short ID serves as the identifier for the short URL.
Error Handling:

- Basic error handling is implemented to return appropriate status codes and messages.
Redirection Logic:

- A GET request to /shortUrl/:id increments the clicks field in the database for tracking purposes before redirecting.
Environment Variables:

- A hardcoded connection string is used if process.env.CONNECTION_STRING is not provided.

### Technologies Used
- Node.js: JavaScript runtime environment.
- TypeScript: Adds static typing to JavaScript.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for storing URLs.
- Mongoose: MongoDB ORM for managing data schemas.
- NanoID: Generates unique short URLs.


