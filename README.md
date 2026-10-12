# Event Feedback Management System

A full-stack web application developed as part of the **Sysslan IT Solutions Full Stack Development Internship**. The application allows users to explore events, submit feedback, and view saved feedback records retrieved from a MySQL database.

## Project Overview

The Event Feedback Management System collects and displays participants' opinions about events. It provides a responsive React frontend, a Node.js and Express backend, and a MySQL database for persistent feedback storage.

## Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
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
- Responsive navigation bar
- Homepage with a modern hero section and feature cards
- Events page with sample event cards
- Feedback submission form
- Event selection
- Interactive star-rating system
- Client-side form validation
- Responsive Bootstrap layout
- Reusable Navbar and Footer components
- User-friendly success and error messages

### Level 2 – Backend Setup: Completed
- Express.js backend server running on port 5000
- Welcome API: `GET /api`
- Feedback submission API: `POST /api/feedback`
- Feedback retrieval API: `GET /api/feedback`
- JSON request-body parsing
- CORS configuration for frontend-backend communication
- Server-side validation of required fields and ratings
- Error handling for API requests

### Level 3 – Database Integration: Completed
- MySQL database: `event_feedback_db`
- Feedback table with ID, name, email, event, rating, comments, and submission timestamp
- Permanent storage of submitted feedback
- Retrieval of saved feedback records from MySQL
- Feedback records returned in newest-first order

### Level 4 – Frontend and Backend Integration: Completed
- React feedback form connected to the backend using the Fetch API
- Feedback submitted through the form is saved in MySQL
- Success and error messages displayed to the user
- Client-side and server-side validation
- Dedicated feedback list page at `/feedback-list`
- Feedback list retrieves records from the backend API
- Displays participant names, event names, star ratings, comments, and submission dates
- Navbar includes a **View Feedback** link
- Loading, empty-list, and error states handled on the feedback list page

### Level 5 – Final Touch and Review: In Progress
- Modernized and responsive user interface
- Consistent styling across Home, Events, and Feedback pages
- Navigation between application pages tested
- Feedback submission and retrieval tested
- README and project structure documented
- Final testing and project demonstration preparation

## Project Structure

```text
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
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Feedback.jsx
│   │   │   └── FeedbackList.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
├── .gitignore
└── README.md
```

**Security note:** The actual `backend/.env` file is intentionally excluded from this structure because it contains local configuration and potentially sensitive credentials. Never commit real database passwords to GitHub.

## Database Setup

### 1. Create the Database

Open MySQL Workbench or your preferred MySQL client and execute:

```sql
CREATE DATABASE event_feedback_db;
```

### 2. Select the Database

```sql
USE event_feedback_db;
```

### 3. Create the Feedback Table

```sql
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    event VARCHAR(150) NOT NULL,
    rating TINYINT NOT NULL,
    comments TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

If the database and table already exist, you do not need to create them again.

## Environment Configuration

Create a `.env` file inside the `backend` directory with your local MySQL settings:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=event_feedback_db
```

Replace `your_mysql_password` with your local MySQL password.

Create a `backend/.env.example` file to document the required variables without exposing actual credentials:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=event_feedback_db
```

Never commit the actual `.env` file or publish real database credentials to GitHub.

## Running the Application Locally

### 1. Start the Backend

Open a terminal in the project root and run:

```powershell
cd backend
npm install
npm run dev
```

If `npm run dev` is not configured in `backend/package.json`, use the start command defined in that file.

The backend should run at `http://localhost:5000`.

### 2. Start the Frontend

Open a second terminal from the project root and run:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

### 3. Ensure MySQL Is Running

Before submitting feedback, make sure the MySQL server is running and the database connection settings in `backend/.env` are correct.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api` | Check the welcome API |
| POST | `/api/feedback` | Submit and save feedback |
| GET | `/api/feedback` | Retrieve saved feedback records |

### Feedback Submission Request

The POST endpoint expects a JSON body containing `name`, `email`, `event`, `rating`, and `comments`.

Example request:

```json
{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "event": "1",
  "rating": 5,
  "comments": "The event was informative and well organized."
}
```

### Feedback Retrieval

The GET endpoint retrieves saved feedback records from MySQL, including participant details, ratings, comments, and submission timestamps.

## Application Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Introduces the application |
| Events | `/events` | Displays sample events |
| Feedback | `/feedback` | Allows participants to submit feedback |
| View Feedback | `/feedback-list` | Displays saved feedback records |

## Testing

The following functionality has been tested during development:

- Backend server startup
- MySQL database connection
- Feedback submission through the frontend form
- Saving feedback records in MySQL
- Retrieving feedback records through the API
- Displaying saved feedback on the frontend
- Event name mapping in the feedback list
- Navigation between Home, Events, Feedback, and View Feedback
- Basic form validation and user-facing error messages

## Security Notes

- Keep database credentials in the backend `.env` file.
- Exclude `.env` files from Git using `.gitignore`.
- Never publish passwords or other private credentials.
- Validate user input on the server before saving it to the database.
- Use environment variables for configuration that differs between development and deployment.

## Future Improvements

- Add search and filtering for feedback records.
- Add pagination for larger feedback lists.
- Improve email validation and accessibility.
- Deploy the frontend and backend for public access.
- Add authentication and role-based access if required for future versions.

## Internship Details

**Organization:** Sysslan IT Solutions

**Program:** Full Stack Development Internship

**Project:** Event Feedback Management System
