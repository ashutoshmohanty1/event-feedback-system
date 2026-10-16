
CREATE DATABASE event_feedback_db;

USE event_feedback_db;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    event VARCHAR(150) NOT NULL,
    rating TINYINT NOT NULL,
    comments TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM feedback;

SELECT * FROM feedback ORDER BY created_at DESC;