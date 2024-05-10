import About from "../components/about"
import Contact from "../components/contact"
import Hero from "../components/hero"
import PortfolioSection from "../components/portfolio"
import SideBar from "../components/sidebar/sidebar.responsive"


const Portfolio = () => {
  return (
    <>
     <SideBar/>
     <Hero/>
     <About/>
     <PortfolioSection/>
     <Contact/>
     
    </>
  )
}

export default Portfolio