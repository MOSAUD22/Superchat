import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const PrivateRoute = ({ children }) => {
    const { currentUser } = UserAuth();


    if(!currentUser) {
        return <Navigate to="/" replace={true} />
    }
    return children;
}