
CREATE TABLE IF NOT EXISTS POST(
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    post_title VARCHAR(64) NOT NULL UNIQUE,
    post_body TEXT NOT NULL,
    author_id INT NOT NULL,

    FOREIGN KEY (author_id) REFERENCES USER(user_id)
);