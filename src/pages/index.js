import * as React from "react"
import Navbar from "../Components/Navbar"
import Main from "../Components/Main"
import Services from "../Components/Services"
import Clinic from "../Components/Clinic"
import Special from "../Components/Special"
import Testi from "../Components/Testi"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import Oval from "../images/Oval Copy.png"
import OvalC from "../images/Oval.png"


const IndexPage = () => {
  return (
    <div>
      <img src={Oval} alt="loading..." className="oval-abso" />
      <img src={OvalC} alt="loading..." className="oval-absoC" />
      <Navbar />
      <Main />
      <Services />
      <Clinic />

      <Special />
      <Testi />
      <Newsletter />
      <Footer />
    </div>)
}

export default IndexPage