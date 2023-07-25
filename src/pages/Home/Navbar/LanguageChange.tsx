import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function LanguageChange() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        className="language-change-button"
        endIcon={<KeyboardArrowDown />}
        color="inherit"
      >
        {/* <span className="flag-text">AZ</span> */}
        <span>AZ</span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableScrollLock
      >
        <MenuItem className="lang-menu-item">
          <span className="flag-text">AZ</span>
        </MenuItem>
        <MenuItem className="lang-menu-item">
          <span className="flag-text">EN</span>
        </MenuItem>
        <MenuItem className="lang-menu-item">
          <span className="flag-text">RU</span>
        </MenuItem>
      </Menu>
    </>
  );
}
