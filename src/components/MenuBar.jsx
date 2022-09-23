import React, { useEffect } from "react";
import { useCallback, useRef, useState } from "react";
import css from "../assets/style/Menubar.module.scss";
import searchIcon from "../assets/image/icons/Search.png";
import { routes } from "./../routies";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import useravatar from "../assets/image/icons/avatar.png";
import { changeCategory, getAllVideos, loadetFirstvideo } from "./redux/TVaction";
const MenuBar = () => {
  const menuRef = useRef();
  const [menuShow, setMenuShow] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const showOrCloseMenu = useCallback(() => {
    setMenuShow(!menuShow);
  }, [menuShow]);

  useEffect(() => {
    dispatch(getAllVideos(history.location.pathname));
    dispatch(loadetFirstvideo())
  }, []);

  return (
    <div
      className={css.navbar}
      ref={menuRef}
      onMouseEnter={() => {
        menuRef.current.classList.add(css.show_menu);
        showOrCloseMenu();
      }}
      onMouseLeave={() => {
        menuRef.current.classList.remove(css.show_menu);
        showOrCloseMenu();
      }}
    >
      {menuShow ? (
        <div className={css.useravatr}>
          <img src={useravatar} alt="avatar" />
          <p>Daniel</p>
        </div>
      ) : null}
      <div className={menuShow ? css.showmenucontainer : css.menucontainer}>
        <ul>
          <li>
            <img src={searchIcon} alt="search" />
            {menuShow ? <p>Search</p> : null}
          </li>
          {routes.map(({ id, path, name, icon, exect }) => {
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  exact={exect}
                  activeClassName={
                    menuShow ? css.active_menu : css.active_menuclosed
                  }
                  onClick={() => {
                    dispatch(changeCategory(path));
                  }}
                >
                  <img src={icon} alt={icon.name} />
                  {menuShow ? <p>{name}</p> : null}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {menuShow ? (
        <div className={css.topLink}>
          <a href="#">LANGUAGE</a>
          <a href="#">GET HELP</a>
          <a href="#">EXIT</a>
        </div>
      ) : null}
    </div>
  );
};

export default MenuBar;
