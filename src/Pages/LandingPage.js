import Navbar from "../NavBar/NavBar"
import Firstcom from "../LandingPage/Component/FirstCom"
import SecondComp from "../LandingPage/Component/Secondcom"
import Card from "../LandingPage/Component/Card"
import Footer from "../Footer/Footer"
import Forthcomp from "../LandingPage/Component/forthcomp"
export default function LandingPage(){
    return<>
    <div>
        <Navbar/>
        <Firstcom/>
        <SecondComp/>
        <Card/>
        <Forthcomp/>
        <Footer/>
    </div>
    
    </>
}