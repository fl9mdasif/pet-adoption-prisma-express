# Project Name: Pet Adoption with Prisma

## Description

This project is a RESTful API for user authentication built using Node.js, Express.js, and Prisma. It allows users to register, login, and authenticate securely, crud pet, adoption request, Passwords are hashed using bcrypt for enhanced security. etc

## Live URL

[Restful API's Live server link](https://pet-adaption-prisma8.vercel.app)

# Features

### 1. User Registration

- Endpoint: `POST /api/register`
- request body

```json
{
  "name": "rahat khan",
  "email": "rahat-khan@gmail.com",
  "password": "123456"
}
```

### 2. User Login

- Endpoint: `POST /api/login`
- request body

```json
{
  "email": "rahat-khan@gmail.com",
  "password": "123456"
}
```

### 3. Add a Pet

- Endpoint: POST /api/pets
- Request Headers:
- Authorization: <JWT_TOKEN>
- Request Body:

```json
{
  "name": "Buddy",
  "species": "dog",
  "breed": "Labrador Retriever",
  "age": 3,
  "size": "Large",
  "location": "Shelter XYZ",
  "description": "Buddy is a friendly and energetic Labrador Retriever. He loves playing fetch and going for long walks.",
  "temperament": "Friendly, playful",
  "medicalHistory": "Up to date on vaccinations, neutered.",
  "adoptionRequirements": "Buddy needs a home with a fenced yard and an active family."
}
```

### 4. Get Paginated and Filtered Pets

- Endpoint: GET /api/pets
- req.params : `species, breed, age, size, location,`

### 5. Update Pet profile

- Endpoint: `PUT /api/pets/:petId`
  - Request Headers:
    - Authorization: <JWT_TOKEN>
- Request Body:

```json
{
  "location": "Alamdanga"
}
```

### 6. Submit Adoption Request

- Endpoint: POST /api/adoption-request
- Request Headers:
  - Authorization: <JWT_TOKEN>
- Request Body:

```json
{
  "petId": "b9964127-2924-42bb-9970-60f93c016ghs",
  "petOwnershipExperience": "Previous owner of a Labrador Retriever"
}
```

### 7. Get Adoption Requests

- Endpoint: GET /api/adoption-requests
- Request Headers:
  - Authorization: <JWT_TOKEN>

### 8. Update Adoption Request Status

- Endpoint: PUT /api/adoption-requests/:requestId
- Request Headers:
  - Authorization: <JWT_TOKEN>
- Request Body:

```json
{
  "status": "APPROVED"
}
```

### 9. Get User Information

- Endpoint: GET /api/profile

* Request Headers:
  - Authorization: <JWT_TOKEN>

### 10. Update User Information

- Endpoint: PUT /api/profile
- Request Headers:
  - Authorization: <JWT_TOKEN>
- Request Body:

```json
{
  "name": "Rahat Khan Asif",
  "email": "rahat-khan@gmail.com"
}
```

## Technology Stack

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- Prisma: Database toolkit for TypeScript and Node.js.
- bcrypt: Library for hashing passwords.
- jsonwebtoken: Library for generating JSON Web Tokens (JWT) for authentication.
- multer: Middleware for handling file uploads.
- nodemailer: Library for sending emails.
- zod: TypeScript-first schema declaration and validation library.
- dotenv: Zero-dependency module for loading environment variables.

## [Project Documentation](https://github.com/Apollo-Level2-Web-Dev/L2-B2-Assignment-8-Full-stack/blob/main/2-Pet-Adoption-Platform.md)

## [Project live Video Documentation ](https://youtu.be/H3u0fGVNBv8)
