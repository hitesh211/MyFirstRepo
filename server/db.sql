CREATE DATABASE todo;

CREATE TABLE todo_list(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);