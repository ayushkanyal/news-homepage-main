import style from "./TitleCover.module.css";
import mobileImage from "../assets/images/image-web-3-mobile.jpg";
import desktopImage from "../assets/images/image-web-3-desktop.jpg";

export default function TitleCover() {
  return (
    <>
      <section className={style["cover"]}>
        <picture>
          <source media="(min-width: 376px)" srcset={desktopImage}></source>
          <source media="(min-width: 100px)" srcset={mobileImage}></source>
          <img src={desktopImage} alt="Grid puzzle desktop"></img>
        </picture>
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?{" "}
        </p>
        <button>Read more</button>
      </section>
    </>
  );
}
