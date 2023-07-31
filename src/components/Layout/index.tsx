import { useEffect, useState } from "react"
import { GoToTopIcon } from "../Icons"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { useLocation } from "react-router-dom"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [showGoToTop, setShowGoToTop] = useState(false)
  const location = useLocation()
  const pathName = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      const bodyElement = document.body

      // Check for vertical scrollbar on the <body> element
      const hasVerticalScrollbarBody =
        bodyElement.scrollHeight > bodyElement.clientHeight

      setShowGoToTop(!!window.scrollY && hasVerticalScrollbarBody)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener and checkScrollBar function when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathName])

  const handleGoToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      {showGoToTop && (
        <div
          className="fixed bottom-36 right-[5%] cursor-pointer hover:scale-105 duration-200"
          onClick={handleGoToTop}
        >
          <GoToTopIcon />
        </div>
      )}
    </div>
  )
}

export default Layout
