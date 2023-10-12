import styles from "./NewArrivals.module.css";

export default function NewArrivals() {
  return (
    <>
      <section className={styles["new"]}>
        <h1>New</h1>
        <article>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <div className={styles["break"]}></div>
        <article>
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <div className={styles["break"]}></div>
        <article>
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
    </>
  );
}
