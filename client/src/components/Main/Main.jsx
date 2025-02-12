import React, {useEffect, useState} from "react";
import s from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage/UserPage";
import CreateQuestPage from "./CreateQuestPage/CreateQuestPage";
import DoQuestPage from "./DoQuestPage/DoQuestPage";
import {useAuth0} from "@auth0/auth0-react";
import {fetchSomething} from "../../api";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";


const Main = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: "твій_cloud_name", // Замініть на своє ім'я хмари
        },
    });

    const {user, isAuthenticated} = useAuth0();

    const [questsData, setQuestsData] = useState(null);

    const defaultQuestsData = [
        {
            id: "12hj34",
            title: "Find your way",
            description: "Find sense in your life and live your best life without depression!",
            type: "Entertainment",
            img: {},
            rating: 9,
            author: "Lizunnn",
            time: "5 min",
            questions: [
                {
                    id: 1,
                    type: 'Test',
                    text: 'How much will be 2+2?',
                    answers: [
                        {id: 1, text: "This is a very very very very big text"},
                        {id: 2, text: 4},
                        {id: 3, text: "This is a very very very very big text This is a very very very very big text This is a very very very very big textThis is a very very very very big text"},
                    ],
                    rightAnswer: "4",
                    selectedAnswer: "",
                },
                {
                    id: 2,
                    type: 'Opened',
                    text: 'How much will be 3+3?',
                    answers: [],
                    rightAnswer: "6",
                },
            ],
        },
        {
            id: "52hj44",
            title: "Find your money",
            description: "You have no money this is so sad.",
            type: "Team Building",
            img: {},
            rating: 10,
            author: "Lizunnn",
            time: "20 min",
            questions: [
                {
                    id: 1,
                    type: 'Test',
                    text: 'How much will be 2+2?',
                    answers: [
                        {id: 1, text: "This is a very very very very big text"},
                        {id: 2, text: 4},
                        {id: 3, text: "This is a very very very very big text This is a very very very very big text This is a very very very very big textThis is a very very very very big text"},
                    ],
                    rightAnswer: "4",
                    selectedAnswer: "",
                },
                {
                    id: 2,
                    type: 'Opened',
                    text: 'How much will be 3+3?',
                    answers: [],
                    rightAnswer: "6",
                },
            ],
        },
        {
            id: "12hj99",
            title: "Find the cat",
            description: "Find the cat you don't need anything else!",
            type: "Memes",
            img: {},
            rating: 7,
            author: "Lizunnn",
            time: "10 min",
            questions: [
                {
                    id: 1,
                    type: 'Test',
                    text: 'How much will be 2+2?',
                    answers: [
                        {id: 1, text: "This is a very very very very big text"},
                        {id: 2, text: 4},
                        {id: 3, text: "This is a very very very very big text This is a very very very very big text This is a very very very very big textThis is a very very very very big text"},
                    ],
                    rightAnswer: "4",
                    selectedAnswer: "",
                },
                {
                    id: 2,
                    type: 'Opened',
                    text: 'How much will be 3+3?',
                    answers: [],
                    rightAnswer: "6",
                },
            ],
        },
    ];

    useEffect(() => {
        fetchSomething("user@example.com")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={s.main}>
            <Routes>
                <Route path={"/"} element={
                    <HomePage questsData={questsData} defaultQuestsData={defaultQuestsData}/>
                }/>
                {isAuthenticated && <Route path={"/account"} element={
                    <UserPage defaultQuestsData={defaultQuestsData}/>
                }/>}
                <Route path={"/create"} element={<CreateQuestPage/>}/>
                <Route path={"/quest"} element={<DoQuestPage/>}/>
            </Routes>
        </div>
    )
}

export default Main;