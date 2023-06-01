import PageLinks from "./PageLinks"
import SocialLinks from "./SocialLinks"

const Footer = () => {
   return (
      <>
         <footer className="section footer">
            <PageLinks ulClass="footer-links" linkClass="footer-link" />
            <SocialLinks ulClass="footer-icons" linkClass="footer-icon" />

            <p className="copyright">
               Backroads travel tours &copy;
               <span id="date">{new Date().getFullYear()}</span> all rights
               reserved
            </p>
         </footer>
      </>
   )
}
export default Footer
