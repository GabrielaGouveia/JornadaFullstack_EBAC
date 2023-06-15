/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react'
import "./video.css"

function video() {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handdleStart() {


    if (play) {
      videoRef.current.pause()
      setPlay(false)

    } else {
      videoRef.current.play()
      setPlay(true)
    }

  }

  return (
    <div className='video'>

      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        controls
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
      ></video>

    </div>
  )
}

export default video