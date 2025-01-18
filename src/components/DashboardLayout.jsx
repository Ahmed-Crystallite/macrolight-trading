// React Router Dom
import { Outlet } from "react-router-dom"
// Components
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout() {
  return (
    <section className="flex">
      <Sidebar />
      <article className="xl:w-[calc(100%-300px)] sm:w-[calc(100%-110px)] w-[calc(100%-70px)] ms-auto overflow-y-auto bg-black text-white">
        <Topbar />
        <Outlet />
      </article>
    </section>
  )
}
