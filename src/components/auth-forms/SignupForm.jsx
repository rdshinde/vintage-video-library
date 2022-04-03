import "./auth-forms.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MatchPassword, Loader } from "../index";
import { useAuth } from "../../context";
import { Toast } from "../../utils";
export const SignupForm = ({ data: { setAuthFormState } }) => {
  const navigate = useNavigate();
  const pwdChangeHandler = (pwd) => {
    setSignupCredentials((prev) => ({ ...prev, password: pwd }));
  };
  const { serverResponse, isLoaderLoading, signupHandler } = useAuth();

  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupCredentials);
    setSignupCredentials((prev) => ({
      ...prev,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    }));
  };
  useEffect(() => {
    if (serverResponse) {
      serverResponse.status === 201 &&
        localStorage.setItem("token", serverResponse.data.encodedToken);
      navigate("/auth");
      setAuthFormState("Login");
      Toast({ type: "success", msg: "Account Created Successfully!" });
    }
  }, [serverResponse]);
  return (
    <form className="text-start" onSubmit={(e) => submitHandler(e)}>
      {isLoaderLoading && <Loader />}
      <div className={`input-group required`}>
        <label htmlFor="first-name"> First Name </label>
        <input
          type="text"
          id="first-name"
          required
          value={signupCredentials.firstName}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />
      </div>
      <div className={`input-group required`}>
        <label htmlFor="last-name"> Last Name </label>
        <input
          type="text"
          id="last-name"
          required
          value={signupCredentials.lastName}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />
      </div>
      <div
        className={`input-group required`}
        success-message={`All looks good!`}
      >
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          required
          value={signupCredentials.email}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
      </div>

      <MatchPassword
        data={{
          getPassword: pwdChangeHandler,
          value: signupCredentials.password,
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
