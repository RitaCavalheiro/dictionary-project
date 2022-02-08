import React from "react";
import "./Phonetic.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Phonetic(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonectics">
      <div className="audio"></div>
      <AudioPlayer
        src={props.phonetic.audio}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
        style={{ width: "300px" }}
        showJumpControls={false}
        showFilledProgress={false}
        showDownloadProgress={false}
        showSkipControls={false}
        layout="horizontal-reverse"
      />
      <span>{props.phonetic.text}</span>
    </div>
  );
}
