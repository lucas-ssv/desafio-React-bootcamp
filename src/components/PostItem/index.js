import React from 'react';

import './styles.css';

const PostHeader = ({ author, date }) => {
    return (
        <section className="post-header">
            <div className="avatar">
                <img src={author.avatar} alt={author.name} />
            </div>
            <div className="details">
                <strong>{author.name}</strong>
                <small>{date}</small>
            </div>
        </section>
    );
}

const PostComments = ({ comments }) => {
    return (
        <section className="post-comment">
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <img src={comment.author.avatar} alt={comment.author.name} />
                    <p>
                        <strong>{comment.author.name} </strong>
                        {comment.content}
                    </p>
                </div>
            ))}
        </section>
    );
}

const PostItem = ({ author, date, content, comments }) => {
    return (
        <div className="posts">
            <PostHeader author={author} date={date} />
            <p className="content">{content}</p>
            <hr/>
            <PostComments comments={comments} />
        </div>
    );
}

export default PostItem;