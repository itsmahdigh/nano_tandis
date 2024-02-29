import Navbar from "../NavBar/NavBar"
import Firstcom from "../LandingPage/Component/FirstCom"
import SecondComp from "../LandingPage/Component/Secondcom"
import Card from "../LandingPage/Component/Card"
import Footer from "../Footer/Footer"
export default function LandingPage(){
    return<>
    <div>
        <Navbar/>
        <Firstcom/>
        <SecondComp/>
        <Card/>
        <Footer/>
    </div>
    
    </>
}