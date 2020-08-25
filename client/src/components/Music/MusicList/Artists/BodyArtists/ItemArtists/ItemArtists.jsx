import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ItemArtists.module.css";
import map_svg from "../../../../../../assets/images/map.svg";
import { useState } from "react";

const ItemArtists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div>
      <NavLink to={`/music-list/artists/${props.nameArtist}`}>
        <div
          className={classes.itemArtists}
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          <h2>{props.nameArtist}</h2>
          <svg>
            <use
              href={
                hover
                  ? map_svg + "#arrow_right_hover"
                  : map_svg + "#arrow_right"
              }
            />
          </svg>
        </div>
      </NavLink>
      <hr />
    </div>
  );
};

export default ItemArtists;
