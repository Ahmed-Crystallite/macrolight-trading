// Components
import { Topbar } from "@/components"
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"
// Media
import VisaIcon from "media/dashboard/icons/visa.png"
import MasterCardIcon from "media/dashboard/icons/mastercard.png"
import { useState } from "react"

export default function PaymentMethod() {
  const [defaultCard, setDefaultCard] = useState("Visa")

  const handleSetDefault = (card) => {
    setDefaultCard(card)
  }

  const methods = [
    [
      VisaIcon,
      "Visa Card",
      defaultCard === "Visa",
      "XXXX XXXX XXXX 4650",
      "Delete",
      "Visa",
    ],
    [
      MasterCardIcon,
      "Mastercard",
      defaultCard === "Mastercard",
      "+XXXX XXXX XXXX 2896",
      "Delete",
      "Mastercard",
    ],
  ]

  return (
    <div className="py-[20px] md:h-screen">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Settings</h1>
          <Topbar />
        </div>
        <div className="grid grid-cols-12 gap-y-5 gap-x-4 items-center bg-[#2E353A] px-5 py-6 rounded-xl">
          <div className="col-span-12 flex items-center justify-between mb-4">
            <h3 className="sm:text-[17px] text-sm leading-tight font-semibold">
              Payment Method
            </h3>
            <Button
              variant="link"
              className="sm:text-base text-xs leading-tight font-normal text-white underline"
            >
              +Add New Card
            </Button>
          </div>
          {methods.map(([icon, label, isVerified, desc, cta, cardType], i) => (
            <div key={i} className="col-span-12">
              <div className="flex flex-wrap gap-y-4 items-center justify-between mb-[17px]">
                <div className="flex items-center gap-x-4">
                  <div className="p-4 bg-[#091620] w-[67px] h-[67px] flex items-center justify-center rounded-[10px]">
                    <img src={icon} alt="icon" width={150} height={150} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 mb-px">
                      <h4 className="sm:text-sm text-xs leading-tight font-semibold">
                        {label}
                      </h4>
                      {isVerified ? (
                        <span className="bg-black text-primary w-[60px] rounded-full text-center flex items-center justify-center h-[22px] sm:text-sm text-xs leading-tight font-normal">
                          Default
                        </span>
                      ) : (
                        <Button
                          variant="link"
                          className="sm:text-sm text-xs p-0 leading-tight font-normal text-primary underline"
                          onClick={() => handleSetDefault(cardType)}
                        >
                          Make as default
                        </Button>
                      )}
                    </div>
                    <span className="sm:text-sm text-xs leading-tight font-normal text-white/60">
                      {desc}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <span className="block sm:text-sm text-xs font-normal leading-tight text-white/60">
                    Exp. 12/24
                  </span>
                  <Button
                    variant="ghost"
                    className="w-[120px] h-[34px] rounded-full bg-transparent border border-primary"
                  >
                    {cta}
                  </Button>
                </div>
              </div>
              <Separator className="bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
