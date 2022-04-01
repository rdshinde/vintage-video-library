import { useState } from "react";
import "./auth-forms.css";
export const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <form className="text-start">
      <div className={`input-group required `} success-message="">
        <label htmlFor="email-id"> Email </label>
        <input type="email" id="email-id" required />
      </div>
      <div
        className={`input-group required`}
        error-message={`Passwords should match.`}
        success-message={`All looks good!`}
      >
        <label htmlFor="confirm-password">Password</label>
        <div className="pwd-input">
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="confirm-password"
            required
          />
          <div className="show-pwd" onClick={() => setShowPwd((prev) => !prev)}>
            <i
              className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}
            ></i>
          </div>
        </div>
      </div>
      <div className="input-group text-center">
        <button
          type="submit"
          onClick={(e) => e.stopPropagation()}
          className={`submit-btn btn btn-default border-rounded-lg`}
        >
          Submit
        </button>
      </div>
      <div className="text-center">
        <div className="btn btn-link">Use Guest Credentials</div>
      </div>
    </form>
  );
};
