import React, {useEffect, useState} from "react";
import s from "./UserInfo.module.css";
import cat from "../../../../img/cat.png";
import {getUserDescription, updateUserDescription} from "../../../../api";


const UserInfo = (props) => {

    const [status, setStatus] = useState(props?.userApiData?.status || "Your status is empty.");
    const [isEditStatus, setIsEditStatus] = useState(false);

    const onSaveStatus = () => {
        setIsEditStatus(false);
        updateUserDescription({email: props.user.email, text: status}).then(res => res);
        // setUserInfo({status: status}).catch(err => console.log(err.message));
    }

    useEffect(() => {
        getUserDescription(props.user.email)
            .then(res => setStatus(res.description));
    }, [])

    const handleBecomeAdmin = () => {
        alert("Sure we believe that you are admin!");
        props.updateUserApiData("isAdmin", true);
    }

    return (
        <div className={s.userInfo}>
            <div className={s.avatar}>
                <img src={props?.user?.picture || cat}/>
                <div className={s.rating}>
                    {props.userApiData.isAdmin && <div>Admin</div>}
                    Rating: #1
                </div>
            </div>
            <div className={s.info}>
                <div className={s.name}>{props?.user?.name || props?.user?.nickname || "Name unknown"}</div>

                <div className={s.email}>{props?.user?.email || props?.user?.nickname}</div>
                <div className={s.status}>
                    {isEditStatus
                        ?
                        <span>
                            <input
                                value={status}
                                onChange={event => setStatus(event.target.value)}/>
                            <button className={s.save} onClick={onSaveStatus}>Save</button>
                        </span>
                        :
                        <span>
                            <span className={s.text}>{status}</span>
                            <button className={s.edit} onClick={() => setIsEditStatus(true)}>Edit</button>
                        </span>
                    }
                </div>
                <div className={s.score}>Score: <span>100000</span></div>
                <div className={s.quests}>Quests created: <span>10</span></div>
                {!props.userApiData.isAdmin &&
                    <button className={s.adminButton} onClick={handleBecomeAdmin}>Become Admin</button>
                }
            </div>
        </div>
    )
}

export default UserInfo;