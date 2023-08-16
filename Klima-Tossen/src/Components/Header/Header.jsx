import HeaderImg from '../../assets/images/Bg-Hero-Blue.png'
import style from './Header.module.scss'


export function Header(){
  return (
    <>
      <header className={style.Header}>
          <img src={HeaderImg} alt="" />
          <hgroup>
            <h1>Klima<span>tossen</span></h1>
            <h2 >KLIMA-TOSSEN.DK</h2>
          </hgroup>
          <article>
            <p>*Det er rigtigt, at vi hver især kun kan bidrage lidt 
            til den samlede løsning.* <br/> <br/>
            *Lige så rigtigt er det, at vi slet ikke kan nå målet,
            uden at hver især bidrager en smule til det.*</p>
          </article>
          
   </header>
 </>  
  )
}



