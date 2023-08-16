import Icon from '../../assets/images/Icon-Co2.png'
import style from './Section1.module.scss'

export const Section1 = () => {

  return(

    <section className={style.Section1}>
        <h1>Hvad er Co2?</h1>
        <div> 
          <img src={Icon} alt="Co2" />
          <article>
              <h4>CO2 er en gasart der findes naturligt i Jordens atmosfære. </h4>
              <p>
              - CO2, findes naturligt i atmosfæren. <br />
              - Livet, er afhængigt af CO2 da det regulerer temperaturen på
              Jorden. <br />
              - CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
              udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved
              opnåes en balance i CO2 "regnskabet". <br />
              - Afbrænding f.eks. af fossile brændstoffer, udleder CO2. <br />
              - Jordens skove og verdenshavene er den største "producent" af den
              ilt, der er nødvendig, for liv på Jorden, som vi kender det. <br />-
              Mennesket er den enlige faktor der har den største indflydelse på
              CO2 -balancen på Jorden i dag!
              </p>
              <a href="#">Læs mere</a>
          </article>
        </div>
    </section>



  )


}