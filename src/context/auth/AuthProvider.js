import { createContext, useContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useAxios } from "../../services";
import { authReducer } from "./authReducer";
import { Toast } from "../../utils";


const initialUserAuthState = {
  userAuthState: {
    isUserLoggedIn: false,
    encodedToken: "",
    user: {},
  },
};
const defaultUser = {
  _id: uuid(),
  firstName: "Rishikesh",
  lastName: "Shinde",
  email: "test@gmail.com",
  password: "Test@123",
};
const AuthContext = createContext(initialUserAuthState);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );
  const [apiData, setApiData] = useState({
    apiURL: "",
    method: "",
    apiPostData: {},
  });

  const { isLoaderLoading, serverResponse } = useAxios(
    apiData.apiURL,
    apiData.method,
    apiData.apiPostData
  );

  const signupHandler = (signupCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "api/auth/signup",
      method: "POST",
      apiPostData: { ...prev, ...signupCredentials },
    }));
  };
  const loginHandler = (loginCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "api/auth/login",
      method: "POST",
      apiPostData: { ...prev, ...loginCredentials },
    }));
  };
  const logoutHandler = () => {
    userAuthDispatch({ type: "LOGOUT" });
    localStorage.clear("token");
    Toast({
      type: "success",
      msg: `${userAuthState.user.firstName} logged out successfully!`,
    });
  };
  useEffect(() => {
    let setTimeOutId;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...defaultUser },
          },
        });
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userAuthState,
        userAuthDispatch,
        isLoaderLoading,
        serverResponse,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
