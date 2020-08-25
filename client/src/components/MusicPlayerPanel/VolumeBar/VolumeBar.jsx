import React from "react";
import classes from "../MusicPlayerPanel.module.css"
import map_svg from "../../../assets/images/map.svg"

const VolumeBar = (props) => {

    let audio = document.getElementById("audio");

  return (
    <React.Fragment>
      <div className={classes.volume}>
        <div className={classes.mute}>
          <svg
            onClick={() => {
              if (props.activeTrack !== null) {
                props.volumeH((audio.volume = 0));
              }
            }}
          >
            <use href={map_svg + "#mute"} />
          </svg>
        </div>

        <input
          disabled={props.activeTrack !== null ? false : true}
          id="volumeRange"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={props.volume}
          style={{
            background: `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
                props.volume * 100
            }%,#E6E6E6 ${props.volume * 100}%, #E6E6E6 100%)`,
          }}
          onInput={() => {
            let val = props.volume * 100;
            let volumeRange = document.getElementById("volumeRange");
            volumeRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
          }}
          onClick={() => {
            let val = props.volume * 100;
            let volumeRange = document.getElementById("volumeRange");
            volumeRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
          }}
          onChange={props.volumeHandler}
        />
        <div className={classes.unmute}>
          <svg
            onClick={() => {
              if (props.activeTrack !== null) {
                props.volumeH((audio.volume = 1));
              }
            }}
          >
            <use href={map_svg + "#max_volume"} />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VolumeBar;
