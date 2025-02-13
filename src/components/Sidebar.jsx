// React Router Dom
import { NavLink } from "react-router-dom"
// Media
import Logo from "media/logo-blue.svg"
import Logo1 from "media/logo_blue.png"
import Icon1 from "media/dashboard/icons/1.svg"
import Icon1Active from "media/dashboard/icons/1_blue.svg"
import Icon2 from "media/dashboard/icons/2.svg"
import Icon2Active from "media/dashboard/icons/2_blue.svg"
import Icon3 from "media/dashboard/icons/3.svg"
import Icon3Active from "media/dashboard/icons/3_blue.svg"
import Icon4 from "media/dashboard/icons/4.svg"
import Icon4Active from "media/dashboard/icons/4_blue.svg"
import Icon5 from "media/dashboard/icons/5.svg"
import Icon5Active from "media/dashboard/icons/5_blue.svg"
import Icon6 from "media/dashboard/icons/6.svg"
import Icon6Active from "media/dashboard/icons/6_blue.svg"
export default function Sidebar({ isCollapsed, toggleAside }) {
  const links = [
    {
      href: "/dashboard",
      activeIcon: Icon1Active,
      icon: Icon1,
      text: "Dashboard",
    },
    {
      href: "/dashboard/trade-list",
      activeIcon: Icon2Active,
      icon: Icon2,
      text: "Trade List",
    },
    {
      href: "/dashboard/templates",
      activeIcon: Icon3Active,
      icon: Icon3,
      text: "Templates",
    },
    {
      href: "/dashboard/backtest-status",
      activeIcon: Icon4Active,
      icon: Icon4,
      text: "Backtest Status",
    },
    {
      href: "/dashboard/results",
      activeIcon: Icon5Active,
      icon: Icon5,
      text: "Results",
    },
    {
      href: "/dashboard/strategy-builder",
      activeIcon: Icon6Active,
      icon: Icon6,
      text: "Strategy Builder",
    },
  ]
  return (
    <aside
      className={`fixed overflow-y-auto ${
        isCollapsed ? "w-[100px]" : "xl:w-[250px] sm:w-[100px] w-[70px]"
      } bg-lightBlack border-r-2 border-[#424E56] h-screen xl:py-8 py-6 transition-all ease-in-out duration-300`}
    >
      <div className="container">
        <img src={Logo1} alt="logo" className="xl:hidden block mx-auto" />
        <div className="flex items-center gap-x-3 justify-between">
          <img
            src={Logo}
            alt="logo"
            className={`${isCollapsed ? "hidden" : "xl:block"} hidden`}
          />
          <button className="xl:block hidden w-full" onClick={toggleAside}>
            <span
              className={`block w-[65%] rounded h-1 mb-2 bg-primary ${
                isCollapsed ? "mx-auto" : "ms-auto"
              }`}
            ></span>
            <span
              className={`block w-[65%] rounded h-1 mb-2 bg-primary ${
                isCollapsed ? "mx-auto" : "ms-auto"
              }`}
            ></span>
            <span
              className={`block w-[65%] rounded h-1 bg-primary ${
                isCollapsed ? "mx-auto" : "ms-auto"
              }`}
            ></span>
          </button>
        </div>
        <div className="xl:mt-10 mt-7">
          <ul className="grid grid-cols-1 gap-y-3">
            {links?.map(({ href, activeIcon, icon, text }, i) => (
              <li key={i} className="relative z-10 overflow-hidden">
                <NavLink
                  title={text}
                  to={href}
                  end
                  className={({ isActive }) =>
                    `flex gap-x-3 group items-center xl:text-lg text-base font-medium sm:px-5 capitalize mb-1 sm:h-[50px] h-[40px] px-[6px] hover:bg-black hover:rounded-xl transition-all ease-in-out duration-300 ${
                      isActive
                        ? "text-primary rounded-[12px] bg-black w-[99%] m-auto"
                        : "text-white/65"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`block w-full group-hover:bg-[linear-gradient(0deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)] sm:h-[52px] h-[42px] -z-10 rounded-[12px] absolute inset-0 transition-all ease-in-out duration-500  ${
                          isActive
                            ? "bg-[linear-gradient(0deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)]"
                            : ""
                        }`}
                      ></span>
                      {isActive ? (
                        <img
                          src={activeIcon}
                          alt="active_icon"
                          className="xl:m-0 mx-auto"
                        />
                      ) : (
                        <img src={icon} alt="icon" className="xl:m-0 mx-auto" />
                      )}
                      <span
                        className={`${
                          isCollapsed ? "hidden" : "xl:block"
                        } hidden `}
                      >
                        {text}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
