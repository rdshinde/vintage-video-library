import { useState } from "react";
import { LoginForm, SignupForm } from "../../components";
import "./auth-page.css";
export const AuthPage = () => {
  const [authFormState, setAuthFormState] = useState("Login");
  return (
    <div className="auth-container border-rounded-md shadow-sm">
      <div className="auth-toggle-btns">
        <div className="auth-btn flex-center p-md">
          <button
            className="btn text-offwhite p-x-lg shadow-md"
            onClick={() => setAuthFormState("Login")}
          >
            Login
          </button>
        </div>
        <div className="auth-btn flex-center p-md">
          <button
            className="btn text-offwhite p-x-lg shadow-md"
            onClick={() => setAuthFormState("Signup")}
          >
            Signup
          </button>
        </div>
      </div>
      <h2 className="text-center">{authFormState}</h2>
      <div className="auth-form p-md">
        {authFormState === "Login" && <LoginForm />}
        {authFormState === "Signup" && <SignupForm />}
      </div>
    </div>
  );
};
