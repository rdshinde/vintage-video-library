import React from "react";
import "./action-modal.css";
export const ActionModal = ({
  data: { showActionModal, actionModalHandler, btns },
}) => {
  return (
    <div className={`action-modal ${showActionModal && "show-action-modal"}`}>
      {btns.map(({ btnText }) => (
        <div className="action-modal__btn">
          <button className="btn" onClick={() => actionModalHandler(btnText)}>
            <i className="fa-solid fa-trash m-r-md text-danger"></i>
            <span className="text-danger">{btnText}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
