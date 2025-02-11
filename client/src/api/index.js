import axiosInstance from "./axiosInstance";

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

export const setUserInfo = async (userInfo) => {
    try {
        const response = await axiosInstance().post("/userInfo", userInfo);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const fetchUserInfo = async (nickname) => {
    try {
        const response = await axiosInstance().get("/userInfo", nickname);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const fetchMyQuests = async (nickname) => {
    try {
        const response = await axiosInstance().get("/myQuests", nickname);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const fetchCompletedQuests = async (nickname) => {
    try {
        const response = await axiosInstance().get("/completedQuests", nickname);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const setQuestRate = async ({id, rate}) => {
    try {
        const response = await axiosInstance().post("/questRate", {id, rate});

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}

export const fetchComments = async (questId) => {
    try {
        const response = await axiosInstance().get(`/quest/${questId}/comments`);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}