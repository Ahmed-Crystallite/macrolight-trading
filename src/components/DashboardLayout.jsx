// React Router Dom
import { Link, NavLink, Outlet } from "react-router-dom"
// Icons
import { ChevronDownIcon, Search } from "lucide-react"
// Components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  ScrollArea,
  Separator,
  Switch,
} from "./ui"
// Media
import Logo from "media/logo-blue.svg"
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
import DiscordIcon from "media/dashboard/icons/discord.svg"
import TwitterIcon from "media/dashboard/icons/twitter.svg"
import BellIcon from "media/dashboard/icons/bell.svg"
import BellIconBlue from "media/dashboard/icons/bell_blue.svg"
import AvatarIcon from "media/dashboard/icons/avatar.png"
import SettingIcon from "media/dashboard/icons/setting_blue.svg"
import PoliciesIcon from "media/dashboard/icons/policies_blue.svg"
import LogoutIcon from "media/dashboard/icons/logout_red.svg"

export default function DashboardLayout() {
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
  const notifications = Array.from({ length: 20 }).map(
    (_, i, a) =>
      `${a.length - i} Lorem ipsum dolor sit amet consectetur. Justo metus id.`
  )
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-3 bg-lightBlack border-r-2 border-[#424E56] h-screen py-4">
        <div className="container">
          <img src={Logo} alt="logo" />
          <div className="mt-10">
            <ul className="grid grid-cols-1 gap-y-3">
              {links?.map(({ href, activeIcon, icon, text }, i) => (
                <li key={i} className="relative z-10 overflow-hidden">
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      `flex gap-x-3 items-center text-lg font-medium px-5 capitalize mb-1 h-[70px] ${
                        isActive
                          ? "text-primary  rounded-[12px] bg-black w-[99%] m-auto"
                          : "text-white/65"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`block w-full h-[72px] -z-10 rounded-[12px] absolute inset-0 transition-all ease-in-out duration-500  ${
                            isActive
                              ? "bg-[linear-gradient(0deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)]"
                              : ""
                          }`}
                        ></span>
                        {isActive ? (
                          <img src={activeIcon} alt="active_icon" />
                        ) : (
                          <img src={icon} alt="icon" />
                        )}
                        {text}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <article className="col-span-9">
        <div className="bg-lightBlack py-4">
          <div className="container">
            <div className="grid grid-cols-12 items-center">
              <search className="col-span-5 flex items-center gap-x-3 bg-black w-[350px] px-3 rounded-[10px] py-1">
                <Label htmlFor="search">
                  <Search className="size-5 text-white/30" />
                </Label>
                <Input
                  id="search"
                  placeholder="Search..."
                  className="border-none focus-visible:ring-0 p-0 placeholder:text-white/40 text-white"
                />
              </search>
              <div className="col-span-7 flex items-center justify-end gap-x-8">
                <div className="flex items-center gap-x-3">
                  <Link
                    to="/dashboard"
                    className="text-white flex items-center gap-x-2 bg-black w-[114px] justify-center h-[36px] px-3 py-1 rounded-full"
                  >
                    <img src={DiscordIcon} alt="icons" />
                    <span>Discord</span>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white flex items-center gap-x-2 bg-black w-[114px] justify-center h-[36px] px-3 py-1 rounded-full"
                  >
                    <img src={TwitterIcon} alt="icons" />
                    <span>Twitter</span>
                  </Link>
                </div>
                <DropdownMenu className="bg-[#2E353A]">
                  <DropdownMenuTrigger className="relative focus-visible:ring-0">
                    <img src={BellIcon} alt="icon" />
                    <span className="bg-red-600 w-6 h-5 absolute block rounded-xl -top-2 -right-2 z-10 text-white text-sm font-medium">
                      2
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-0 bg-[#2E353A] mt-5">
                    <DropdownMenuLabel className="bg-primary/20 py-5 px-5 text-white flex items-center justify-between">
                      <span className="text-base font-bold leading-tight">
                        Notifications
                      </span>
                      <Switch />
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="bg-[#2E353A] hover:!bg-[#2E353A]">
                      <ScrollArea
                        orientation="vertical"
                        className="h-72 w-[380px] rounded-none bg-[#2E353A] hover:!bg-[#2E353A] hover:shadow-none"
                      >
                        {notifications.map((notification, i) => (
                          <>
                            <div
                              key={i}
                              className="flex gap-x-3 items-start py-3 px-3"
                            >
                              <div className="bg-[#41B0FF20] w-[60px] h-[57px] flex items-center px-4 rounded-[10px]">
                                <img src={BellIconBlue} alt="icon" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold leading-normal text-white mb-1">
                                  {notification}
                                </p>
                                <p className="text-xs font-medium leading-normal text-white/50">
                                  {++i} days ago
                                </p>
                              </div>
                            </div>
                            <Separator className="my-2 bg-[#A3A4B250]" />
                          </>
                        ))}
                      </ScrollArea>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu className="bg-[#2E353A]">
                  <DropdownMenuTrigger className="relative flex items-center gap-x-3 focus-visible:ring-0">
                    <Avatar>
                      <AvatarImage src={AvatarIcon} />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <ChevronDownIcon className="text-white/50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-0 bg-[#2E353A] mt-3">
                    <DropdownMenuLabel className="py-5 px-5 text-white flex gap-x-3 items-center justify-between">
                      <Avatar>
                        <AvatarImage src={AvatarIcon} />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div className="">
                        <h3 className="text-sm font-medium leading-tight mb-1">
                          Justin Philips
                        </h3>
                        <p className="text-xs font-medium leading-tight text-white/50">
                          justin_Philips@gmail.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                    <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-x-3"
                      >
                        <img src={SettingIcon} alt="icon" />
                        <span className="block text-sm font-medium leading-tight">
                          Settings
                        </span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                    <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-x-3"
                      >
                        <img src={PoliciesIcon} alt="icon" />
                        <span className="block text-sm font-medium leading-tight">
                          Policies
                        </span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                    <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-x-3"
                      >
                        <img src={LogoutIcon} alt="icon" />
                        <span className="block text-sm font-medium leading-tight">
                          Logout
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  )
}
