import style from "./TitleCover.module.css";
import webImage from "../assets/images/image-web-3-mobile.jpg";

export default function TitleCover() {
  return (
    <>
      <section className={style["cover"]}>
        <img src={webImage} alt="Grid puzzle desktop"></img>
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
