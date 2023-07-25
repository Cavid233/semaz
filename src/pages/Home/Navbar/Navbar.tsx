import "./Navbar.sass";
import logoImage from "../../../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LanguageChange from "./LanguageChange";
import RightDrawer from "./RightDrawer";
import React from "react";

interface INavbar {}

export default function Navbar(props: INavbar) {
  const [rightDarwerOpened, setRightDriwerOpened] = React.useState<boolean>(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="blue-line-part" />
        <div className="navbar-part">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
          <div className="links-container">
            <div className="link left-side">HAQQIMIZDA</div>
            <div className="link">XIDMƏTLƏR</div>
            <div className="link">MƏHSULLAR</div>
            <div className="link">PARTNYORLAR</div>
            <div className="link">XƏBƏRLƏR</div>
            <div className="link">ƏLAQƏ</div>
            <div className="instagram link">
              <InstagramIcon />
            </div>
              <LanguageChange />

              <IconButton className='left-drawer-open-button' onClick={() => setRightDriwerOpened(true)}><MenuIcon /></IconButton>
            {/* <div className="language">

              RU
              <ExpandMoreIcon />
            </div> */}

          </div>
        </div>
        <RightDrawer open={rightDarwerOpened} onClose={() => setRightDriwerOpened(false)} />

      </div>
    </div>
  );
}
