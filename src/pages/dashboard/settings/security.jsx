// Components
import { Topbar } from "@/components"
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"
// Media
import CheckIcon from "media/dashboard/icons/check.svg"
import MailIcon from "media/dashboard/icons/mail.svg"
import CallIcon from "media/dashboard/icons/call.svg"
import LockIcon from "media/dashboard/icons/lock.svg"
export default function Security() {
  const verfications = [
    [MailIcon, "Email", true, "justin_Philips@gmail.com", "Manage"],
    [CallIcon, "Phone", false, "+1000000000", "Manage"],
    [LockIcon, "Password", "", "*************", "Change"],
  ]
  return (
    <div className="py-[20px] md:h-screen">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Settings</h1>
          <Topbar />
        </div>
        <div className="grid grid-cols-12 gap-y-5 gap-x-4 items-center bg-[#2E353A] px-5 py-6 rounded-xl">
          <div className="col-span-12 mb-4">
            <h3 className="text-[17px] leading-tight font-semibold">
              2-step Verifications
            </h3>
          </div>
          {verfications.map(([icon, label, isVerfied, desc, cta], i) => (
            <div key={i} className="col-span-12">
              <div className="flex flex-wrap gap-y-4 items-center justify-between mb-[17px]">
                <div className="flex items-center gap-x-4">
                  <div className="p-4 bg-[#091620] w-[57px] h-[57px] flex items-center justify-center rounded-[10px]">
                    <img src={icon} alt="icon" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 mb-px">
                      <h4 className="text-sm leading-tight font-semibold">
                        {label}
                      </h4>
                      {label !== "Password" &&
                        (isVerfied ? (
                          <span className="flex gap-x-2 items-center text-sm leading-tight font-normal">
                            <img src={CheckIcon} alt="icon" /> Verified
                          </span>
                        ) : (
                          <Button
                            variant="link"
                            className="text-sm leading-tight font-normal text-primary underline"
                          >
                            Required
                          </Button>
                        ))}
                    </div>
                    <span className="text-sm leading-tight font-normal text-white/60">
                      {desc}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-[120px] h-[34px] rounded-full bg-transparent border border-primary"
                >
                  {cta}
                </Button>
              </div>
              <Separator className="bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
