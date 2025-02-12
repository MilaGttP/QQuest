import { createContext, useContext, useState } from "react";

const ApiUserContext = createContext();

export const ApiUserProvider = ({ children }) => {
    const [userApiData, setUserApiData] = useState({
        status: "this is a status",
        isAdmin: false,
        email: "yelyzavetanov@gmail.com",
    });

    const updateUserApiData = (field, value) => {
        setUserApiData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <ApiUserContext.Provider value={{ userApiData, updateUserApiData }}>
            {children}
        </ApiUserContext.Provider>
    );
};

export const useApiUser = () => useContext(ApiUserContext);