
import logo from '../../assets/images/KT-logo.png'


export function Footer () {

  return(
    <section>
      <h3>KlimaTossen NPO</h3>
      <div>
        <p>Vesterbrogade 92</p>
        <p>9000 Aalborg</p>
        <p>info@klima-tossen.dk</p>
        <p>9922 3344 (Åben man - fre: 08.00 - 16.00)</p>
        </div>
        <h3>SAMARBEJDSPARTNERE:</h3>
        <div>
          <a href="">https://www.dn.dk/</a>
          <a href="">http://www.miljoeportal.dk</a>
      </div>
      <img src={logo} alt="FooterLogo" />

        <form>
          <h4>Ja tak! Jeg vil gerne høre mere</h4>
          <input type="text" placeholder="Fulde navn" />
          <input type="text" placeholder="Hjem by" />
          <input type="email" placeholder="Email adresse" />
          <input type="tel" placeholder="Telefon nummer" />
          <div>
             <p>Få en samtale med Klimatossen</p>
            <input type="checkbox" />
            <p>Modtag nyhedsbrev</p>
            <input type="checkbox" />
          </div>
            <input type="Submit" value="Send" />  

        </form>
    </section>
  )



}
