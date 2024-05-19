import About from "../components/about"
import Contact from "../components/contact"
import Hero from "../components/hero"
import PortfolioSection from "../components/portfolio.section/portfolio"
import SideBar from "../components/sidebar/sidebar.responsive"
// import Skills from "../skills"
import Skills from "../skills"


const Portfolio = () => {
  return (
    <>
     <SideBar/>
     <Hero/>
     <About/>
     {/* <Skills/> */}
     <Skills/>
     <PortfolioSection/>
     <Contact/>
    </>
  )
}

export default Portfolio