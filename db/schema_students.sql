CREATE DATABASE IF NOT EXISTS students_db;
USE students_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS students;

-- Create the students table
CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    student_name varchar(255) NOT NULL,
    activated BOOL DEFAULT false,
    PRIMARY KEY (id)
);
