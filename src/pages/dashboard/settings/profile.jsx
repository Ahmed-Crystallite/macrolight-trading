// Components
import { DatePicker, Topbar } from "@/components"
import Form from "@/components/Settings/DataPicker"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@/components/ui/cnIndex"
// Media
import Avater from "media/dashboard/settings/profile/avater.png"

export default function Profile() {
  return (
    <div className="py-[20px] h-screen">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Settings</h1>
          <Topbar />
        </div>
        <div className="grid grid-cols-12 gap-y-5 gap-x-4 items-center bg-[#2E353A] px-5 py-6 rounded-xl">
          <div className="2xl:col-span-6 lg:col-span-8 col-span-12 grid md:grid-cols-2 grid-cols-1 gap-y-5">
            <div className="flex items-center gap-5">
              <Avatar className="size-24">
                <AvatarImage src={Avater} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-[17px] font-semibold leading-tight mb-2">
                  Profile Picture
                </h3>
                <p className="text-[15px] leading-tight font-normal text-white/50">
                  Max file size 6.0mb
                </p>
              </div>
            </div>
            <div className="flex items-center md:justify-end gap-x-3">
              <Button className="w-[137px] h-[34px] rounded-full text-white bg-primary hover:bg-primary border border-primary">
                Change Photo
              </Button>
              <Button className="w-[137px] h-[34px] rounded-full text-[#FF1B1B] bg-transparent hover:bg-transparent border border-[#FF1B1B]">
                Delete Photo
              </Button>
            </div>
          </div>
          <form method="post" className="col-span-12">
            <div className="grid gap-5">
              <Form />
              <div className="md:col-span-6 col-span-12">
                <DatePicker />
              </div>
            </div>
            <div className="flex items-center justify-end mt-5">
              <Button className="text-[14px] leading-tight bg-primary w-[137px] h-[34px] rounded-full hover:bg-primary/80">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
