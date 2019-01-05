create database angularcrud;

use angularcrud;

CREATE TABLE games(
    ID int(11) not null AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

describe games;