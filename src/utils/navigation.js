// import {  FaWarehouse, FaChessBoard  } from "react-icons/fa";
import React from "react";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import {
  RiChatVoiceFill,
  RiSettings5Line,
  RiQuestionAnswerLine,
} from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
// import RequestIcon from "../assets/RequestIcon.svg";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";


const size = "26px";

const navigation = [
  {
    link: "/",
    title: "Dashboard",
    icon: <HiOutlineHome size={size} />,
  },
  {
    link: "/request",
    title: "Request",
    icon: <RiQuestionAnswerLine size={size} />,
  },
  {
    link: "/customers",
    title: "Customers",
    icon: <HiOutlineUserGroup size={size} />,
  },
  {
    link: "/trips",
    title: "Trips",
    icon: <MdLocationOn size={size} />,
  },
  {
    link: "/wallet",
    title: "Wallet",
    icon: <GiWallet size={size} />,
  },
  {
    link: "/chat",
    title: "Chat",
    icon: <RiChatVoiceFill size={size} />,
  },
  {
    link: "/notification",
    title: "Notification",
    icon: <NotificationsNoneIcon size={size} />,
  },
  {
    link: "/live-tracking",
    title: "Live Tracking",
    icon: <BiCurrentLocation size={size} />,
  },
  {
    link: "/settings",
    title: "Settings",
    icon: <RiSettings5Line size={size} />,
  },
];

export default navigation;
