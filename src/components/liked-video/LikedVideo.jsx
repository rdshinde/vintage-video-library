import { useState } from "react";
import { ActionModal } from "../action-modal/ActionModal";
import { Video } from "../utility-video-card/Video";
import { useUserData } from "../../context";
import { Toast } from "../../utils";
export const LikedVideo = ({ videoData: { video } }) => {
  const { _id, title, creator } = video;
  const { userDataDispatch } = useUserData();
  const [showActionModal, setActionModalState] = useState(false);
  const actionModalHandler = (type) => {
    setActionModalState((prev) => !prev);
    if (type === "Remove Like") {
      userDataDispatch({ type: "REMOVE_FROM_LIKED", payload: _id });
      Toast({ type: "success", msg: "Removed From Liked Videos." });
    }
  };
  return (
    <div className="video-card-wrapper" style={{ maxHeight: "19rem" }}>
      <Video video={{ setActionModalState, _id, title, creator }} />
      <ActionModal
        data={{
          showActionModal,
          actionModalHandler,
          btns: [{ btnText: "Remove Like" }],
        }}
      />
    </div>
  );
};
