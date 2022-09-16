psql

CREATE DATABASE my_budget_admin;

\c my_budget_admin;

-- You are now connected to database "my_budget_admin" as user "rodry".

CREATE TABLE users(
    googleId VARCHAR(255) PRIMARY KEY,
    displayName VARCHAR(73) NOT NULL,
    firstName VARCHAR(33) not null,
    seconName VARCHAR(33) not null,
    profilePic VARCHAR(255)
);

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    amount FLOAT NOT NULL,
    transaction_type VARCHAR(7) NOT NULL,
    transaction_date DATE NOT NULL,
    description VARCHAR(255),
    photo_url VARCHAR(255),
    own_by INT NOT NULL,
    FOREIGN KEY(own_by) REFERENCES users(id)
);

CREATE TABLE currencies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(33) NOT NULL,
    symbol VARCHAR(2) NOT NULL,
    rate FLOAT NOT NULL
);