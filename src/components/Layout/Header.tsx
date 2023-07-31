import { navLinks } from "@/data"
import { MenuList } from "./MenuList"
import { useNavigate, Link, useLocation } from "react-router-dom"
import clsx from "clsx"

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="w-full h-16 bg-text-500 text-white px-[10%] sticky top-0 z-50">
      <div className="flex items-center justify-between h-full">
        <div
          className="px-4 max-w-max cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.webp" className="object-contain w-[109px]" />
        </div>

        <div className="flex gap-6">
          {navLinks.map((nav) => {
            const isShowBadge = nav.count
            const isActive = nav.path === location.pathname

            return (
              <Link
                to={nav.path}
                className={clsx(
                  isActive && "text-light-orange",
                  "flex gap-2 cursor-pointer hover:text-light-orange duration-200"
                )}
                key={nav.id}
              >
                <div className="relative">
                  {isShowBadge && <BadgeCount number={nav.count} />}
                  {nav.icon}
                </div>
                <div className="font-notoJP font-light">{nav.label}</div>
              </Link>
            )
          })}

          <MenuList />
        </div>
      </div>
    </div>
  )
}

const BadgeCount = ({ number }: { number?: number }) => {
  return (
    <div className="absolute w-4 h-4 bg-primary-orange rounded-[50%] text-[10px] flex justify-center items-center -right-2">
      {number}
    </div>
  )
}
