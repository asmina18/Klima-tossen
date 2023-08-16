
import {Header} from '../Header/Header'
import { Navigation} from '../../Components/Navigation/Nav'
import {Text} from '../KortText/kortText'
import {Section1} from '../Section1/Section1'
import {Section2} from '../Section2/Section2'
import { Section3 } from '../Section3/Section3'
import { Section4 } from '../Section4/Section4'
import {Footer} from '../Footer/Footer'






export  const MainPage = () =>{
  return(
<>
    <Header /> 
    <Navigation/>
    <Text/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
  </>
  )
}