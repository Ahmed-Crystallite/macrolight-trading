// React Router Dom
import { Link } from "react-router-dom"
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
} from "./ui/cnIndex"
// Media
import BellIcon from "media/dashboard/icons/bell.svg"
import BellIconBlue from "media/dashboard/icons/bell_blue.svg"
import AvatarIcon from "media/dashboard/icons/avatar.png"
import SettingIcon from "media/dashboard/icons/setting_blue.svg"
import PoliciesIcon from "media/dashboard/icons/policies_blue.svg"
import LogoutIcon from "media/dashboard/icons/logout_red.svg"

export default function Topbar() {
  const notifications = Array.from({ length: 20 }).map(
    (_, i, a) =>
      `${a.length - i} Lorem ipsum dolor sit amet consectetur. Justo metus id.`
  )
  return (
    <div className="bg-lightBlack py-6">
      <div className="px-4">
        <div className="grid grid-cols-12 gap-y-8 items-center">
          <search className="lg:col-span-5 col-span-12 flex items-center gap-x-3 bg-black lg:w-[350px] px-3 rounded-[10px] py-1">
            <Label htmlFor="search">
              <Search className="size-5 text-white/30" />
            </Label>
            <Input
              id="search"
              placeholder="Search..."
              className="border-none focus-visible:ring-0 p-0 placeholder:text-white/40 text-white"
            />
          </search>
          <div className="lg:col-span-7 col-span-12 flex lg:divide-x-2 divide-white/20 items-center lg:justify-end justify-between lg:gap-x-8 gap-x-4">
            <div className="flex items-center gap-x-3">
              <div className="relative z-10">
                <Link
                  to="/dashboard"
                  className="group text-white flex items-center gap-x-2 bg-black lg:w-[114px] w-max justify-center lg:h-[36px] h-[40px] px-3 py-1 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                    className="fill-[#979a9d] group-hover:fill-primary"
                  >
                    <g
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className="lg:block hidden group-hover:text-primary">
                    Discord
                  </span>
                  <span
                    className={`block w-full group-hover:bg-[linear-gradient(0deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)] lg:h-[37.5px] h-[42px] -z-10 rounded-full absolute inset-0 transition-all ease-in-out duration-500`}
                  ></span>
                </Link>
              </div>
              <div className="relative z-10">
                <Link
                  to="/dashboard"
                  className="group text-white flex items-center gap-x-2 bg-black lg:w-[114px] w-max justify-center lg:h-[36px] h-[40px] px-3 py-1 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                    className="fill-[#979a9d] group-hover:fill-primary"
                  >
                    <g
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className="lg:block hidden group-hover:text-primary">
                    Twitter
                  </span>
                  <span
                    className={`block w-full group-hover:bg-[linear-gradient(0deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)] lg:h-[37.5px] h-[42px] -z-10 rounded-full absolute inset-0 transition-all ease-in-out duration-500`}
                  ></span>
                </Link>
              </div>
            </div>
            <div className="lg:ps-8 flex gap-x-8">
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
                      className="h-72 sm:w-[380px] w-[300px] rounded-none bg-[#2E353A] hover:!bg-[#2E353A] hover:shadow-none"
                    >
                      {notifications.map((notification, i) => (
                        <div key={i}>
                          <div className="flex gap-x-3 items-start py-3 px-3 rounded transition-all ease-in-out duration-300 hover:bg-[#41B0FF20]">
                            <div className="bg-[#41B0FF20] tra w-[60px] h-[57px] flex items-center px-4 rounded-[10px]">
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
                        </div>
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
                      to="/dashboard/settings"
                      className="flex items-center gap-x-3"
                    >
                      <img src={SettingIcon} alt="icon" />
                      <span className="block text-sm font-medium leading-tight rounded transition-all ease-in-out duration-300 hover:text-primary">
                        Settings
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                  <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                    <Link
                      to="/dashboard/policies"
                      className="flex items-center gap-x-3"
                    >
                      <img src={PoliciesIcon} alt="icon" />
                      <span className="block text-sm font-medium leading-tight rounded transition-all ease-in-out duration-300 hover:text-primary">
                        Policies
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                  <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                    <Link to="/login" className="flex items-center gap-x-3">
                      <img src={LogoutIcon} alt="icon" />
                      <span className="block text-sm font-medium leading-tight rounded transition-all ease-in-out duration-300 hover:text-red-600">
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
    </div>
  )
}
