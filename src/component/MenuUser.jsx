import React from 'react';
import '../Style/MenuUser.css';
import { IoBriefcaseSharp } from "react-icons/io5";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHelp } from "react-icons/md";






const MenuUser = () => {
    return (

      <div className="sub-bar">
      
        <div className="new-cases">
         
          <a href="#"> <IoBriefcaseSharp /> Cases</a>
        </div>
       
        <div className="duty-alloted">
          <a href="#"> <MdOutlineBusinessCenter /> Duty Alloted</a>
        </div>
        <div className="leave">
          <a href="#"><MdOutlineHolidayVillage /> Leave</a>
        </div>
        <div className="all-officer-profile">
          <a href="#"><CgProfile /> All Officer Profile</a>
        </div>
        <div className="need">
          <a href="#"><MdOutlineHelp /> Need</a>
        </div>
      </div>
    );
}

export default MenuUser;