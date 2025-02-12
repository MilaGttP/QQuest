import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";
import {ApiUserProvider} from "./context/apiUserContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={"dev-yrahk217y7qkc7m1.us.auth0.com"}
            clientId={"ivlNt0eY3qIFY7kfqDOfDIbfuYvZnrzA"}
            authorizationParams={{
                redirect_uri: "http://localhost:3000",
                audience: "https://qquest-api.com",
            }}
            cacheLocation="localstorage"
            useRefreshTokens={true}
            useCookiesForTransactions={true}
        >
            <ApiUserProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ApiUserProvider>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
