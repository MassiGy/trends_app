
CREATE TABLE IF NOT EXISTS COMMENT(
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    comment_text VARCHAR(256) NOT NULL,

    author_id INT NOT NULL,
    post_id INT NOT NULL,

    FOREIGN KEY (author_id) REFERENCES USER(user_id),
    FOREIGN KEY (post_id) REFERENCES POST(post_id)
);