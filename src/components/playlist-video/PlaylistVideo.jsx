import { useState } from "react";
import { ActionModal } from "../action-modal/ActionModal";
import { Video } from "../utility-video-card/Video";
import { useUserData } from "../../context";
import { Toast } from "../../utils";
export const PlaylistVideo = ({ videoData: { video, playlistId } }) => {
  const { _id, title, creator } = video;
  const { userDataDispatch } = useUserData();
  const [showActionModal, setActionModalState] = useState(false);
  const actionModalHandler = (type) => {
    setActionModalState((prev) => !prev);
    if (type === "Remove from playlist") {
      userDataDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: { playlistId: playlistId, videoId: _id },
      });
      Toast({ type: "success", msg: "Removed From playlist." });
    }
  };
  return (
    <div className="video-card-wrapper" style={{ maxHeight: "19rem" }}>
      <Video video={{ setActionModalState, _id, title, creator }} />
      <ActionModal
        data={{
          showActionModal,
          actionModalHandler,
          btns: [{ btnText: "Remove from playlist" }],
        }}
      />
    </div>
  );
};
