# 📝 MERN Blog Application

A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase for authentication.

## 🚀 Features

- User authentication (email/password & Google OAuth via Firebase)
- Admin functionality (checkbox to register as admin)
- Create, edit, and delete blog posts (admin-only)
- Responsive UI with Flowbite + TailwindCSS
- Protected routes and role-based access
- Redux for global state management
- Commenting system with likes and editing
- Search functionality with filters (category, sort, search term)
- Dashboard for managing users, posts, and comments (admin-only)

## 🧰 Tech Stack

**Frontend:**
- React
- React Router
- Redux Toolkit
- Flowbite + TailwindCSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Auth:**
- Firebase Authentication (Email/Password & Google Sign-In)

### Backend Endpoints

#### **Authentication**
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login a user
- `POST /api/auth/google` - Login or register a user via Google OAuth

#### **Users**
- `PUT /api/user/update/:userId` - Update user details
- `DELETE /api/user/delete/:userId` - Delete a user
- `POST /api/user/signout` - Logout a user
- `GET /api/user/getusers` - Get all users (admin-only)
- `GET /api/user/:userId` - Get a specific user

#### **Posts**
- `POST /api/post/create` - Create a new post (admin-only)
- `GET /api/post/getposts` - Get posts with filters (e.g., category, search term, etc.)
- `PUT /api/post/updatepost/:postId/:userId` - Update a post (admin-only)
- `DELETE /api/post/deletepost/:postId/:userId` - Delete a post (admin-only)

#### **Comments**
- `POST /api/comment/create` - Add a comment to a post
- `GET /api/comment/getPostComments/:postId` - Get comments for a specific post
- `PUT /api/comment/likeComment/:commentId` - Like or unlike a comment
- `PUT /api/comment/editComment/:commentId` - Edit a comment
- `DELETE /api/comment/deleteComment/:commentId` - Delete a comment
- `GET /api/comment/getcomments` - Get all comments (admin-only)

### Frontend Pages

- **Home**: Displays recent blog posts and a welcome message.
- **About**: Information about the blog and its creator.
- **Sign In**: Login page for users.
- **Sign Up**: Registration page for new users.
- **Dashboard**: Admin dashboard for managing users, posts, and comments.
- **Create Post**: Page for admins to create a new blog post.
- **Update Post**: Page for admins to edit an existing blog post.
- **Post Page**: Displays a single blog post with comments.
- **Search**: Search page with filters for posts.
- **Projects**: Highlights additional projects.

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mern-blog.git
   cd mern-blog
2. Install dependencies for both the backend and frontend:

 ```bash
    npm install
    cd client
    npm install
```

3. Set up environment variables:
```bash 
Backend: Create a .env file in the root directory with the following: JWT_SECRET="your_jwt_secret" MONGO="your_mongodb_connection_string"
```
Frontend: Create a .env file in the client directory with the following:

```bash
VITE_FIREBASE_API_KEY="your_firebase_api_key"
```

4. Start the development servers:

- Backend:
```bash
npm run dev
```
- Frontend:
```bash
cd client
npm run dev
```

5. Open the application in your browser at http://localhost:5173.

📜 License
This project is licensed under the MIT License.

```bash

This updated README includes the backend API endpoints and a detailed description of the features and structure of the project. Let me know if you need further adjustments!
```