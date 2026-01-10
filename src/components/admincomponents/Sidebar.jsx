import React from "react";
import "../../pages/Landing.css"
// import HomeIcon from "@mui/icons-material/Home";
import SidebarData from "./SidebarData.jsx"
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-[300px] border-2 sidebar">
        <ul>
        {SidebarData.map((val) => {
            return (
                <li key= {val.title}> <Link to ={val.Link}><div>{val.title}</div></Link></li>
            )
        })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
