import { socialLinks } from "../data"
import SocialLink from "./SocialLink"

const SocialLinks = ({ ulClass, linkClass }) => {
   return (
      <ul className={ulClass}>
         {socialLinks.map((link) => {
            const { id } = link
            return <SocialLink key={id} {...link} linkClass={linkClass} />
         })}
      </ul>
   )
}
export default SocialLinks
