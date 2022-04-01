import { useState } from "react";
import { MatchPassword } from "../match-password/MatchPassword";
import "./auth-forms.css";
export const SignupForm = () => {
  const [password, setPassword] = useState("");
  const pwdChangeHandler = (inputPwd) => {
    setPassword(inputPwd);
  };
  return (
    <form className="text-start">
      <div className={`input-group required`}>
        <label htmlFor="first-name"> First Name </label>
        <input type="text" id="first-name" required />
      </div>
      <div className={`input-group required`}>
        <label htmlFor="last-name"> Last Name </label>
        <input type="text" id="last-name" required />
      </div>
      <div
        className={`input-group required`}
        success-message={`All looks good!`}
      >
        <label htmlFor="email"> Email </label>
        <input type="email" id="email" required />
      </div>

      <MatchPassword
        data={{
          getPassword: pwdChangeHandler,
          value: password,
        }}
      />
      <div className="input-group text-center">
        <button
          type="submit"
          onClick={(e) => e.stopPropagation()}
          className={`btn btn-default border-rounded-lg submit-btn`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
