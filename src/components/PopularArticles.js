import style from "./PopulaArticles.module.css";
import img_article_01 from "../assets/images/image-retro-pcs.jpg";
import img_article_02 from "../assets/images/image-top-laptops.jpg";
import img_article_03 from "../assets/images/image-gaming-growth.jpg";

export default function PopulaArticles() {
  return (
    <>
      <section className={style["popular"]}>
        <article>
          <img src={img_article_01} alt="Retro PCs cartoon"></img>
          <div className={style["text-content"]}>
            <h2>01</h2>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>
        <article>
          <img src={img_article_02} alt="Back-lit keyboard"></img>
          <div className={style["text-content"]}>
            <h2>02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>
        <article>
          <img
            src={img_article_03}
            alt="Floating Game Controller in hand"
          ></img>
          <div className={style["text-content"]}>
            <h2>03</h2>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </section>
    </>
  );
}
