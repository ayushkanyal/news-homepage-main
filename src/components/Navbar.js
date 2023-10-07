import style from "./Navbar.module.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);
  }

  return (
    <>
      <div className={style.overlay}></div>
      <div className={style["nav-bar"]}>
        <img src={logo} alt="Website logo"></img>
        <nav>
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
        <div className={style.hamburger} onClick={handleClick}>
          <span className={style["bar"]}></span>
          <span className={style["bar"]}></span>
          <span className={style["bar"]}></span>
        </div>
      </div>
    </>
  );
}
