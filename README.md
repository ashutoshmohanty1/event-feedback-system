# Event Feedback Management System

A full-stack web application developed as part of the Sysslan IT Solutions Full Stack Development Internship.

## Project Progress

### Level 1 – Frontend Completed

**Technologies:** React.js, Bootstrap 5, JavaScript, HTML5, CSS3, React Router.

**Features:**
- Responsive navigation bar
- Homepage with hero section
- Events page with sample event cards
- Feedback submission form
- Event selection and star ratings
- Client-side form validation
- Responsive Bootstrap layout
- Reusable Navbar and Footer components

**Current limitation:** Feedback is handled on the frontend and is not yet stored permanently.

## Upcoming Levels

- Level 2: Backend Setup — Node.js and Express.js
- Level 3: Database Basics — MySQL
- Level 4: Frontend and Backend Integration
- Level 5: Final Touch and Review

## Running the Frontend

1. Open the frontend directory.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown in the terminal.


### Level 2 – Backend Setup Completed

**Status:** Completed

**Technologies Used:** Node.js, Express.js, CORS, Nodemon.

**Features Implemented**
- Express backend server running on port 5000
- Welcome API: `GET /api`
- Feedback submission API: `POST /api/feedback`
- Feedback retrieval API: `GET /api/feedback`
- Request body parsing using Express JSON middleware
- Frontend-to-backend integration using the Fetch API
- Basic required-field validation

**Current Limitation:** Feedback is stored temporarily in an in-memory array. Data will be lost when the server restarts.

### Next: Level 3 – Database Basics

- Create a MySQL database and feedback table
- Store feedback permanently
- Retrieve feedback from MySQL