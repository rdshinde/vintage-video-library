import { useState } from "react";
import { ActionModal } from "../action-modal/ActionModal";
import { Video } from "../utility-video-card/Video";
export const LikedVideo = () => {
  const [showActionModal, setActionModalState] = useState(false);
  const actionModalHandler = (type) => {
    setActionModalState((prev) => !prev);
  };
  return (
    <div className="video-card-wrapper" style={{ maxHeight: "19rem" }}>
      <Video data={{ setActionModalState }} />
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
