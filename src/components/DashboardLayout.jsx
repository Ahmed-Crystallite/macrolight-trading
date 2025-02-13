// React
import { useState } from "react"
// React Router Dom
import { Outlet } from "react-router-dom"
// Components
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout() {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(true)

  const toggleAside = () => {
    setIsAsideCollapsed(!isAsideCollapsed)
  }
  return (
    <section className="flex">
      <Sidebar isCollapsed={isAsideCollapsed} toggleAside={toggleAside} />
      <article
        className={`${
          isAsideCollapsed
            ? "w-[calc(100%-100px)]"
            : "xl:w-[calc(100%-250px)] sm:w-[calc(100%-100px)] w-[calc(100%-70px)]"
        } ms-auto overflow-y-auto bg-black text-white`}
      >
        <Topbar />
        <Outlet />
      </article>
    </section>
  )
}
