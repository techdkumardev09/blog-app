# Blog Application - frontend & backend

This is a simple blog application built with Next.js for the frontend and Node.js with Express for the backend. It provides an intuitive and responsive user interface for reading and managing blog posts. Key features include blog post creation, editing, deleting and viewing blog posts (CRUD).

## Features

    ```bash
    User-friendly interface for reading and managing blog posts.
    Create, edit, view and delete blog posts.
    Responsive design for all devices.
    ```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/) - The latest version of Node
- npm (Node Package Manager): This is typically included with Node.js installation.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/techdkumardev09/blog-app>
   cd blog-app

   ```

2. Navigate to the frontend directory and install the frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install the backend dependencies:

   ```bash
   cd backend
   npm install
   ```

## Starting the Application

### frontend

- cd frontend
- npm run dev
- The frontend will be accessible at http://localhost:3000

### backend

- cd backend
- npm run dev
- The backend will be accessible at http://localhost:8080 || http://localhost:8081

### API Endpoints

### The backend of this application provides the following API endpoints:

1. GET /api/blog - Get a list of all blog posts.
2. GET /api/blog/:id - Get a specific blog post by ID.
3. POST /api/blog/create - Create a new blog post.
4. PUT /api/blog/update/:id - Update an existing blog post.
5. DELETE /api/blog/:id: Delete a blog post.

## Edit/Delete blog

- for editing/deleting the blog post we need to access the url http://localhost:3000/edit-blog
