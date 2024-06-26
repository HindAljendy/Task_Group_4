import About from "../components/about"
import Contact from "../components/contact/contact"
import Hero from "../components/hero"
import PortfolioSection from "../components/portfolio.section/portfolio"
import SideBar from "../components/sidebar/sidebar.responsive"

import Skills from "../skills"



const Portfolio = () => {
  return (
    <>
     <SideBar/>
     <Hero/>
     <About/>
     <Skills/>
     <PortfolioSection/>
     <Contact/>
    </>
  )
}

export default Portfolio