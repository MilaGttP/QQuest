import React from "react";
import s from "./Comment.module.css";
import {useApiUser} from "../../../../../context/apiUserContext";


const Comment = ({comment, ...props}) => {

    const {userApiData} = useApiUser();

    return (
        <div className={s.comment}>
            <div className={s.author}>{comment.email}</div>
            <div>{comment.text}</div>
            {userApiData.isAdmin &&
                <button className={s.deleteButton} onClick={() => props.deleteComment(comment.id)}>Delete</button>
            }
        </div>
    )
}

export default Comment;