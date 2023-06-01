import logo from "../images/logo.svg"
import PageLinks from "./PageLinks"
import SocialLinks from "./SocialLinks"

const Header = () => {
   return (
      <>
         <header className="navbar">
            <nav className="nav-center">
               <div className="nav-header">
                  <img src={logo} className="nav-logo" alt="backroads" />
                  <button type="button" className="nav-toggle" id="nav-toggle">
                     <i className="fas fa-bars"></i>
                  </button>
               </div>

               <PageLinks ulClass="nav-links" linkClass="nav-link" />
               <SocialLinks ulClass="nav-icons" linkClass="nav-icon" />
            </nav>
         </header>
      </>
   )
}
export default Header
