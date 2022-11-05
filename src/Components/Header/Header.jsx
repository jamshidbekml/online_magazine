import "./Header.scss";

// SVGS
import ProfileIcon from "../../assets/Lib/svgs/Profile";
import NotificationIcon from "../../assets/Lib/svgs/Notification";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link className="header__logo" to={"/"}>
            LOGO
          </Link>
        </div>
        <div className="header__right">
          <span className="header__notification">
            <Badge badgeContent={1} color="primary">
              <NotificationIcon />
            </Badge>
          </span>
          <div className="header__profile">
            <p className="header__profile-text">Личный кабинет</p>
            <ProfileIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
