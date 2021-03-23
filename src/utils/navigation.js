// import {  FaWarehouse, FaChessBoard  } from "react-icons/fa";
import React from "react";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { GrUserPolice } from "react-icons/gr";
import { IoMdBusiness } from "react-icons/io";
import { FaStoreAlt } from "react-icons/fa";
import {
  RiUserLocationLine,
  RiChatVoiceFill,
  RiSettings5Line,
  RiMoneyDollarBoxFill,
} from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const size = "26px";
const navigation = [
  {
    link: "/",
    title: "Dashboard",
    icon: <HiOutlineHome size={size} />,
  },

  {
    link: "/driver",
    title: "Driver",
    icon: <GrUserPolice color="#FFFFFF" size={size} />,
  },
  {
    link: "/customers",
    title: "Customers",
    icon: <HiOutlineUserGroup size={size} />,
  },
  {
    link: "/enterprise",
    title: "Enterprise",
    icon: <IoMdBusiness size={size} />,
  },
  {
    link: "/merchant",
    title: "Merchant",
    icon: <FaStoreAlt size={size} />,
  },
  {
    link: "/request",
    title: "Request",
    icon: <RiUserLocationLine size={size} />,
  },
  {
    link: "/live-tracking",
    title: "Live Tracking",
    icon: <BiCurrentLocation size={size} />,
  },
  {
    link: "/chat",
    title: "Chat",
    icon: <RiChatVoiceFill size={size} />,
  },
  {
    link: "/trips",
    title: "Trips",
    icon: <GoLocation size={size} />,
  },
  {
    link: "/vehicles",
    title: "Vehicles",
    icon: <MdLocalShipping size={size} />,
  },
  {
    link: "/routes",
    title: "Routes",
    icon: <HiOutlineHome size={size} />,
  },
  {
    link: "/finance",
    title: "Finance",
    icon: <RiMoneyDollarBoxFill size={size} />,
  },
  {
    link: "/settings",
    title: "Settings",
    icon: <RiSettings5Line size={size} />,
  },
];

export default navigation;
