# Book-Search-With-GraphQL

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application using GraphQL for API communication. It allows users to search for books via the Google Books API, create an account, save favorite books, and manage their saved books. The application is deployed on Render.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment on Render](#deployment-on-render)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Search for books using the Google Books API.
- User authentication (signup and login).
- Save books to your account for future reference.
- View and remove saved books.
- Built using GraphQL and Apollo Server for API communication.

## Technologies Used

- **Front-End**: React, React Router, Bootstrap
- **Back-End**: Node.js, Express.js
- **GraphQL**: Apollo Server, GraphQL
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Installation

To run this application locally, follow these steps:

```sh
git clone https://github.com/Acid0000/Book-Search-With-GraphQL.git
cd Book-Search-With-GraphQL
npm install
```

### Client Installation

Navigate to the `client` directory to install dependencies:

```sh
cd client
npm install
```

### Server Installation

Navigate to the `server` directory to install server-side dependencies:

```sh
cd server
npm install
```

## Usage

To run the application locally:

```sh
npm run develop
```

This command will start both the client and server using `concurrently`. The client will be accessible at `http://localhost:3000`, and the server (GraphQL API) will be accessible at `http://localhost:4001`.

## Deployment on Render

This application is deployed on Render https://book-search-with-graphql.onrender.com/ The following commands are used to deploy it:

### Build Command

```sh
npm run render-build
```

This command will:
- Install root, client, and server dependencies.
- Build the client using Vite.

### Start Command

```sh
npm start
```

This command will start the Express server and serve the client files in production.

### Environment Variables

Ensure you set the following environment variables for the Render deployment:

- `MONGODB_URI`: MongoDB connection string.
- `NODE_ENV`: Set this to `production`.

## Available Scripts

In the project root, you can run the following scripts:

```json
"start": "node server/server.js",
"develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
"install": "cd server && npm install && cd ../client && npm install",
"build": "cd client && npm run build",
"render-build": "npm install && cd client && npm install --production=false && npm run build && cd ../server && npm install"
```

### Client Scripts

In the `client` directory, you can run:

- **`npm run dev`**: Starts the React development server.
- **`npm run build`**: Builds the client using Vite for production.
- **`npm run preview`**: Previews the production build.

### Server Scripts

In the `server` directory, you can run:

- **`npm run start`**: Starts the server.
- **`npm run watch`**: Starts the server with Nodemon for development.

## API Endpoints

### GraphQL Endpoints

The GraphQL API is served at `/graphql`. Available queries and mutations include:

- **Queries**:
  - `me`: Fetches the logged-in user's information (including saved books).

- **Mutations**:
  - `login(email, password)`: Logs in a user and returns an authentication token.
  - `addUser(username, email, password)`: Registers a new user and returns an authentication token.
  - `saveBook(bookDetails)`: Saves a book to the user's account.
  - `removeBook(bookId)`: Removes a book from the user's saved list.

### Example Queries:

#### Fetch Current User

```graphql
query {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      title
      authors
      description
    }
  }
}
```

#### Save a Book

```graphql
mutation {
  saveBook(bookDetails: {
    bookId: "12345",
    title: "GraphQL for Beginners",
    authors: ["John Doe"],
    description: "A beginner's guide to GraphQL.",
    image: "image_url",
    link: "book_link"
  }) {
    _id
    username
    savedBooks {
      bookId
      title
    }
  }
}
```

## License

This project is licensed under the ISC License.
