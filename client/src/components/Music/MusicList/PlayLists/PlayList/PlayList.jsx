import React from "react";
import classes from "./PlayList.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../../assets/images/map.svg";
import { useState } from "react";

const PlayList = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      {props.playListSwitcher ? (
        <>
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
          >
            <div
              className={classes.playList}
              onClick={() => {
                let i = 0;

                props.tracks.map((e) => {
                  if (
                    (e.title === props.tempTrack.title) &
                    (e.author === props.tempTrack.author)
                  ) {
                    i += 1;
                  }

                  return i;
                });

                if (i === 0) {
                  let payload = [...props.tracks, props.tempTrack];

                  props.updatePlaylist(props.id, {
                    tracks: payload,
                  });
                }
              }}
            >
              <img src={props.img} alt="description" />
              <div className={classes.description}>
                <h3>{props.name}</h3>
              </div>
              <div className={classes.arrowRight}>
                <svg>
                  <use
                    href={
                      hover
                        ? map_svg + "#arrow_right_big_hover"
                        : map_svg + "#arrow_right_big"
                    }
                  />
                </svg>
              </div>

              <hr />
            </div>
          </NavLink>
        </>
      ) : (
        <NavLink
          to={`/music-playlists/${props.name}/`}
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          <div className={classes.playList}>
            <img src={props.img} alt="description" />
            <div className={classes.description}>
              <h3>{props.name}</h3>
            </div>
            <div className={classes.arrowRight}>
              <svg>
                <use
                  href={
                    hover
                      ? map_svg + "#arrow_right_big_hover"
                      : map_svg + "#arrow_right_big"
                  }
                />
              </svg>
            </div>

            <hr />
          </div>
        </NavLink>
      )}
    </>
  );
};

export default PlayList;
