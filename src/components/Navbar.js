import style from "./Navbar.module.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [navClass, setNavClass] = useState(null);

  function handleClick() {
    if (!isActive) {
      setNavClass("nav_active");
      setIsActive(true);
    } else {
      setNavClass(null);
      setIsActive(false);
    }
  }

  return (
    <>
      {isActive ? <div className={style.overlay}></div> : null}
      <div className={style["nav-bar"]}>
        <img src={logo} alt="Website logo"></img>
        <nav className={style[navClass]}>
          <a href="src\index.js">Home</a>
          <a href=".new-arrivals">New</a>
          <a href=".popular-articles">Popular</a>
          <a href="#" target="_blank">
            Trending
          </a>
          <a href="#" target="_blank">
            Categories
          </a>
        </nav>
        <div
          className={
            `${style["hamburger"]}` + " " + `${isActive ? style["active"] : ""}`
          }
          onClick={handleClick}
        >
          <span className={style["bar"]}></span>
          <span className={style["bar"]}></span>
          <span className={style["bar"]}></span>
        </div>
      </div>
    </>
  );
}
