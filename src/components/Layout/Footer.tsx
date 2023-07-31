import { footerLinks } from "@/data"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="h-32 bg-text-500 text-white flex items-center px-[10%]">
      <div className="flex gap-[45px] text-[11px] font-light">
        {footerLinks.map((link) => {
          return (
            <Link
              key={link.key}
              to={link.path}
              className="tracking-wider font-notoJP"
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
