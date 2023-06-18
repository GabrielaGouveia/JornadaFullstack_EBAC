import React, {useState} from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({curtidas,mensagens,compartilhamentos}) {
  const [curtido, setCurtido] = useState(false);

  function curtir() {
    if (curtido) {
      setCurtido(false);
    } else {
      setCurtido(true);
    }
  }
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__opcao" onClick={curtir}>
        {curtido ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>
          { curtido ? curtidas + 1: curtidas }
        </p>
      </div>

      <div className="videoSidebar__opcao">
        <ChatIcon fontSize="large" />
        <p>
         {mensagens}
        </p>
      </div>

      <div className="videoSidebar__opcao">
        <ShareIcon fontSize="large" />
        <p>
          {compartilhamentos}
        </p>
      </div>
    </div>
  );
}

export default VideoSidebar;