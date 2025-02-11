import React from "react";
import s from "./Comment.module.css";


const Comment = ({comment, ...props}) => {
    return (
        <div className={s.comment}>
            <div className={s.author}>{comment.author}</div>
            <div>{comment.text}</div>
            <button className={s.deleteButton} onClick={() => props.deleteComment(comment.id)}>Delete</button>
        </div>
    )
}

export default Comment;