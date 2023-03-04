
CREATE TABLE IF NOT EXISTS UPVOTE(
    user_id INT NOT NULL,
    post_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES USER(user_id),
    FOREIGN KEY (post_id) REFERENCES POST(post_id),

    PRIMARY KEY(user_id,post_id)
);