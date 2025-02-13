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
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const register = async (user) => {
    try {
        const response = await axiosInstanceJSON.post("/Account/Register", user);
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

export const fetchCreatedQuests = async (email) => {
    try {
        const response = await axiosInstance.get(
            `/Account/CreatedQuests?email=${email}`);

        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchCompletedQuests = async (email) => {
    try {
        const response = await axiosInstance.get(
            `/Account/PassedQuests?email=${email}`);

        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchAchievements = async (email) => {
    try {
        const response = await axiosInstance.get(
            `/Account/GetUserBadges?email=${email}`);

        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchQuestions = async (nanoId) => {
    try {
        const response = await axiosInstance.post("/Quest/GetQuestTasks/",
            {nanoId: nanoId}
        );

        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchQuests = async () => {
    try {
        const response = await axiosInstanceJSON.get("/Home/Quests");
        return response;
    } catch (err) {
        console.log(err.message);
    }
}

export const completeQuest = async (quest) => {
    try {
        const response = await axiosInstanceJSON.post("/Account/CompletedUserQuest", quest);
        return response;
    } catch (err) {
        console.log(err.message);
    }
}