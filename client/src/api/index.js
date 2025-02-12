import {axiosInstance, axiosInstanceJSON} from "./axiosInstance";

const fetchData = async () => {
    try {
        const response = await axiosInstance().get('/data');
        console.log(response.data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(false);
    }
};

export const fetchSomething = async (email) => {
    try {
        const response = await axiosInstance.post("/Account/Login", {email: email});

    } catch (err) {
        console.log(err.message);
    }
}

export const register = async (user) => {
    try {
        const response = await axiosInstanceJSON.post("/Account/Register", user);
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
    }
}

export const createQuest = async (quest) => {
    try {
        const response = await axiosInstanceJSON.post("/Quest/Create", quest);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const fetchQuests = async (quest) => {
    try {
        const response = await axiosInstanceJSON.get("/Home/Quests");

        // console.log(response.data);
        return response;
    } catch (err) {
        console.log(err.message);
    }
}