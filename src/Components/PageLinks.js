import { pageLinks } from "../data"
import PageLink from "./PageLink"

const PageLinks = ({ ulClass, linkClass }) => {
   return (
      <ul className={ulClass} id="nav-links">
         {pageLinks.map((link) => {
            return <PageLink key={link.id} {...link} linkClass={linkClass} />
         })}
      </ul>
   )
}
export default PageLinks
