import { menuList } from "@/data"
import { CloseIcon, MenuIcon } from "../Icons"
import type { MenuProps } from "antd"
import { Dropdown } from "antd"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import clsx from "clsx"

export const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const items: MenuProps["items"] = menuList.map((menu) => {
    const isActive = location.pathname === menu.path

    return {
      label: (
        <Link
          className={clsx(
            isActive && "!text-light-orange",
            "font-notoJP font-light text-lg"
          )}
          to={menu.path}
          onClick={() => setIsOpen(false)}
        >
          {menu.label}
        </Link>
      ),
      key: menu.key,
    }
  })

  return (
    <div className="ml-4 cursor-pointer">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="topRight"
        onOpenChange={setIsOpen}
        overlayClassName="!min-w-[280px]"
      >
        <a onClick={(e) => e.preventDefault()}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </a>
      </Dropdown>
    </div>
  )
}
