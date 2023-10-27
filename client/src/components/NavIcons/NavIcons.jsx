import React from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { UilSignout } from '@iconscout/react-unicons'
import { UilUserSquare } from '@iconscout/react-unicons'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthActions";
import { useDispatch } from "react-redux";

const NavIcons = () => {
  const dispatch = useDispatch()

  const handleLogOut = ()=> {
    dispatch(logout())
  }

  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      {/* <UilSetting /> */}
      <button onClick={handleLogOut} style={{cursor: "pointer", background: "inherit", border: "inherit"}}><UilSignout /></button>
      {/* <button onClick={handleLogOut} style={{cursor: "pointer", background: "inherit", border: "inherit"}}><UilSignOutAlt /></button> */}
      <img src={Noti} alt="" />
      {/* <UilUserSquare /> */}
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
