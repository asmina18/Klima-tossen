import style from './kortText.module.scss'



export function Text() {
  return (
    <section className={style.Text}>
      <article>
        <h2>“Alle er vi en del af problemet såvel som af løsningen, og vores 
          medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven for udslippet af drivhusgasser. Effekten af indsatsen afhænger af, hvor mange der trækker i den rigtige retning.”
          </h2>
      </article>
    </section>
  );
}