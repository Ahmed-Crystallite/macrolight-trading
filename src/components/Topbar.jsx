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
import DiscordIcon from "media/dashboard/icons/discord.svg"
import TwitterIcon from "media/dashboard/icons/twitter.svg"
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
              <Link
                to="/dashboard"
                className="text-white flex items-center gap-x-2 bg-black lg:w-[114px] w-max justify-center lg:h-[36px] h-[40px] px-3 py-1 rounded-full"
              >
                <img src={DiscordIcon} alt="icons" />
                <span className="lg:block hidden">Discord</span>
              </Link>
              <Link
                to="/dashboard"
                className="text-white flex items-center gap-x-2 bg-black lg:w-[114px] w-max justify-center lg:h-[36px] h-[40px] px-3 py-1 rounded-full"
              >
                <img src={TwitterIcon} alt="icons" />
                <span className="lg:block hidden">Twitter</span>
              </Link>
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
                          <div className="flex gap-x-3 items-start py-3 px-3">
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
                      <span className="block text-sm font-medium leading-tight">
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
                      <span className="block text-sm font-medium leading-tight">
                        Policies
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#A3A4B250]" />
                  <DropdownMenuItem className="text-white hover:!text-white py-3 px-5">
                    <Link to="/login" className="flex items-center gap-x-3">
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
    </div>
  )
}
