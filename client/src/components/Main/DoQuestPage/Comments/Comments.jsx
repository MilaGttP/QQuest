import React, {useState} from "react";
import s from "./Comments.module.css";
import Comment from "./Comment/Comment";
import {useAuth0} from "@auth0/auth0-react";
import {addComment} from "../../../../api";


const Comments = ({comments, ...props}) => {

    const [comment, setComment] = useState("");

    const {user} = useAuth0();

    const handleAddComment = () => {
        if (comment) {
            console.log(comments)
            props.addComment(user.email, comment);
            addComment({
                email: user.email,
                text: comment,
                nanoId: props.nanoId
            })
            setComment("");
        }
    }

    return (
        <div className={s.comments}>
            <div className={s.title}>Comments</div>
            <div className={s.list}>
                {comments?.length &&
                    comments.map(e => <Comment deleteComment={props.deleteComment} key={e.id} comment={e}/>)
                }
            </div>
            <div className={s.form}>
                <input
                    value={comment}
                    placeholder={"Your comment..."}
                    onChange={event => setComment(event.target.value)}
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    )
}

export default Comments