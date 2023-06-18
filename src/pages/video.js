import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";


function Video({curtidas,mensagens,compartilhamentos, nome, descricao, musica,url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function darPlayVideo() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={darPlayVideo}
        loop
        src={url}
      ></video>

      <VideoSidebar
      curtidas = {curtidas}
      mensagens = {mensagens}
      compartilhamentos= {compartilhamentos}
      />
      <VideoFooter 
      nome = {nome}
      descricao={descricao}
      musica={musica}
      />
    </div>
  );
}

export default Video;