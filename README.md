# Google Books Search Engine - MERN Stack

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books using the Google Books API and save them to their account. The backend uses Apollo Server and GraphQL for handling API requests, and the frontend is built with React. Users can sign up, log in, search for books, save them to their account, and view or delete saved books.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment to Render](#deployment-to-render)
- [Environment Variables](#environment-variables)
- [License](#license)

## Demo

A live demo of the application can be found at: **[https://book-search-with-graphql.onrender.com/]**

## Technologies

- **Frontend**: React, Apollo Client, React Bootstrap, Vite
- **Backend**: Node.js, Express, Apollo Server, GraphQL
- **Database**: MongoDB (via MongoDB Atlas)

## Features

- **Search for Books**: Allows users to search for books using the Google Books API.
- **User Authentication**: Users can sign up, log in, and stay logged in via JSON Web Tokens (JWT).
- **Save Books**: Users can save books to their personal account.
- **View Saved Books**: Users can view and delete books from their saved list.

## Installation

To install the application locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/yourusername/google-books-search.git

# Navigate into the project directory
cd google-books-search

# Install dependencies for both backend and frontend
npm run install
```

This will install the dependencies for both the backend (`server`) and the frontend (`client`).

### Client Configuration

In the `client` directory, if you have any environment variables for the frontend, create a `.env` file and add them there. Most frontend API URLs should already point to the backend deployed to Render.

## Usage

To run the application in development mode:

```sh
# Start the development environment
npm run develop
```

This will concurrently start both the React development server (frontend) and the Node.js server (backend).

### Production Build

To build the frontend for production:

```sh
# Build the frontend
npm run build
```

### Running the Production Server

To run the Node.js server in production mode:

```sh
# Start the production server
npm start
```

## Deployment to Render

Follow these steps to deploy the application to [Render](https://render.com):

### Backend Deployment

1. Log in to your Render account.
2. Click on **New Web Service**.
3. Select your GitHub repository and connect.
4. Set the following fields:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add the following environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
6. Click **Create Web Service** to deploy the backend.

### Frontend Deployment

1. Back in Render, click on **New Static Site**.
2. Select the same GitHub repository but set the root to the `client` folder.
3. Set the following fields:
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `client/build`
4. Deploy the frontend by clicking **Create Static Site**.

## Environment Variables

You will need the following environment variables for deployment:

### Backend (`server`):
```
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret
PORT=4001
```

### Frontend (`client`):
No specific environment variables are required for the frontend unless you're working with external services.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
