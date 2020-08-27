import React from "react";
import UserPhoto from "../../assets/images/user.png";
import Pagination from "@material-ui/lab/Pagination";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../assets/images/map.svg";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.rootdiv}>
      <div className={classes.userslider}>
        <div className={classes.root}>
          <Pagination
            count={pagesCount}
            onChange={(e, page) => {
              props.getUsers(page);
            }}
          />
        </div>
      </div>
      <div className={classes.container}>
        {props.users.map((e) => (
          <div className={classes.card} key={e.id}>
            <img
              src={e.photos.small != null ? e.photos.small : UserPhoto}
              className={classes.userphoto}
              alt="description"
            />
            <NavLink to={"/profile/" + e.id}>
              <p className={classes.title}>{e.name}</p>
            </NavLink>
            <p className={classes.status}>{e.status || "No status"}</p>
            <div className={classes.profilecardsocial}>
              <div className={classes.item}>
                <span className={classes.iconfont}>
                  <svg className={classes.icon} fill="#fff">
                    <use href={map_svg + "#facebook"} />
                  </svg>
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.iconfont}>
                  <svg className={classes.icon}>
                    <use href={map_svg + "#site"} />
                  </svg>
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.iconfont}>
                  <svg className={classes.icon}>
                    <use href={map_svg + "#vk"} />
                  </svg>
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.iconfont}>
                  <svg className={classes.icon}>
                    <use href={map_svg + "#twitter"} />
                  </svg>
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.iconfont}>
                  <svg className={classes.icon}>
                    <use href={map_svg + "#instagram"} />
                  </svg>
                </span>
              </div>
            </div>

            <div className={classes.buttons}>
              <button className={classes.message}>Message</button>
              {e.followed ? (
                <button
                  disabled={props.followingInProgress.includes(e.id)}
                  className={classes.unfollow}
                  onClick={() => {
                    props.unFollow(e.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.includes(e.id)}
                  onClick={() => {
                    props.Follow(e.id);
                  }}
                  className={classes.follow}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
