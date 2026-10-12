# Event Feedback Management System

A full-stack web application developed as part of the **Sysslan IT Solutions Full Stack Development Internship**. The application allows users to explore events, submit feedback, and save feedback data in a MySQL database.

## Project Overview

The Event Feedback Management System provides a simple interface for collecting event participants' opinions and ratings. It combines a React frontend with a Node.js and Express backend and a MySQL database.

## Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- HTML5 and CSS3
- Bootstrap 5
- React Router
- Fetch API

### Backend
- Node.js
- Express.js
- CORS
- MySQL2
- dotenv
- Nodemon

### Database
- MySQL

## Project Features

### Level 1 – Frontend Development: Completed
- Responsive navigation bar with Home, Events, and Feedback pages
- Homepage with a modern hero section and feature cards
- Events page with sample event cards
- Feedback form with event selection
- Interactive star-rating system
- Client-side form validation
- Responsive layout using Bootstrap 5
- Reusable Navbar and Footer components
- User-friendly success and error messages

### Level 2 – Backend Setup: Completed
- Express.js backend server running on port 5000
- Welcome API: `GET /api`
- Feedback submission endpoint: `POST /api/feedback`
- Feedback retrieval API: `GET /api/feedback`
- JSON request-body parsing
- CORS configuration for frontend-backend communication
- Server-side validation of required fields and ratings
- Error handling for API requests

### Level 3 – Database Integration: Completed
- MySQL database: `event_feedback_db`
- Feedback table with fields for ID, name, email, event, rating, comments, and submission timestamp
- Permanent storage of submitted feedback in MySQL
- Retrieval of saved feedback records from the database
- Newest feedback records returned first

### Level 4 – Frontend and Backend Integration: Partially Completed
- React feedback form connected to the backend using the Fetch API
- Feedback submitted through the form is saved in MySQL
- Success and error messages displayed to the user
- Required-field and rating validation implemented

**Remaining verification:** Confirm that saved feedback records are also displayed in a frontend list or feedback page, as required by the project specification.

### Level 5 – Final Touch and Review: In Progress
- Modernized and responsive user interface
- Consistent styling across the Home, Events, and Feedback pages
- Navigation and feedback submission flow tested
- Final review, README verification, and project demonstration preparation

## Project Structure

EVENT-FEEDBACK-SYSTEM/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   └── feedbackRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Events.jsx
│   │   │   └── Feedback.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
├── .gitignore
└── README.md

## Database Setup

### 1. Create the Database

Open MySQL Workbench or your preferred MySQL client and execute:

CREATE DATABASE event_feedback_db;

### 2. Select the Database

USE event_feedback_db;

### 3. Create the Feedback Table

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    event VARCHAR(150) NOT NULL,
    rating TINYINT NOT NULL,
    comments TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

If the database and table already exist, you do not need to create them again.

## Environment Configuration

Create a `.env` file inside the `backend` directory with your local MySQL settings:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=event_feedback_db

Replace `your_mysql_password` with your own MySQL password.

**Important:** Never commit your actual `.env` file or database credentials to GitHub. Use `.env.example` to document the required variables without including real secrets.

## Running the Application Locally

### 1. Start the Backend

Open a terminal in the project root and run:

cd backend
npm install
npm run dev

If your `backend/package.json` does not define a `dev` script, use the start command configured in that file.

The backend should run at:

`http://localhost:5000`

### 2. Start the Frontend

Open a second terminal from the project root and run:

cd frontend
npm install
npm run dev

Open the local URL displayed by Vite in your terminal.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api` | Check the welcome API |
| POST | `/api/feedback` | Submit and save feedback |
| GET | `/api/feedback` | Retrieve saved feedback |

The POST endpoint expects a JSON body containing `name`, `email`, `event`, `rating`, and `comments`.

Example request:

{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "event": "1",
  "rating": 5,
  "comments": "The event was informative and well organized."
}

## Testing

The following functionality has been tested during development:
- Backend server startup
- MySQL database connection
- Feedback submission through the API and frontend form
- Saving feedback records in MySQL
- Retrieving feedback records through the API
- Frontend navigation and form validation

**Note:** Displaying the retrieved feedback records on a frontend page must also be verified before marking all integration requirements as complete.

## Security Notes

- Keep database credentials in the backend `.env` file.
- Exclude `.env` files from Git using `.gitignore`.
- Do not publish passwords, API secrets, or other private credentials.
- Validate user input on the server before saving it to the database.

## Future Improvements

- Add a dedicated frontend page to display submitted feedback, if not already implemented.
- Improve email validation and user-facing error handling.
- Add pagination or filtering for larger feedback lists.
- Deploy the frontend and backend for public access.

## Internship Details

**Organization:** Sysslan IT Solutions
**Program:** Full Stack Development Internship
**Project:** Event Feedback Management System
