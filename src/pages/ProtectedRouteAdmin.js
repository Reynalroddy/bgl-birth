import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
const ProtectedRouteAdmin = ({ children }) => {
//   const { userInfo } = useSelector((state) => state.user);
const userInfo={name:'true',
isAdmin:true};

return userInfo && userInfo.isAdmin ? children : <Navigate to="/login" />;
};

export default ProtectedRouteAdmin;