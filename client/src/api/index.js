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

export const getUserInfo = async (nickname) => {
    try {
        const response = await axiosInstance().get("/userInfo", nickname);

        console.log(response.data);

    } catch (err) {
        console.log(err.message);
    }
}