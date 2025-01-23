// Components
import { SelectField, Topbar } from "@/components"
import { Button } from "@/components/ui/Button"
import { Switch } from "@/components/ui/Switch"

export default function Preferences() {
  // Currency options (this can be extended)
  const currencyOptions = [
    {
      label: "Local Currency",
      items: [
        { value: "usd", label: "USD (United States Dollar)" },
        { value: "eur", label: "EUR (Euro)" },
        { value: "gbp", label: "GBP (British Pound)" },
        { value: "cad", label: "CAD (Canadian Dollar)" },
        { value: "inr", label: "INR (Indian Rupee)" },
      ],
    },
  ]

  // Time Zone options (this can be extended)
  const timeZoneOptions = [
    {
      label: "Time Zone",
      items: [
        { value: "utc-5", label: "UTC -5 (New York, USA)" },
        { value: "utc-8", label: "UTC -8 (Los Angeles, USA)" },
        { value: "utc+1", label: "UTC +1 (Berlin, Germany)" },
        { value: "utc+0", label: "UTC +0 (London, UK)" },
        { value: "utc+5:30", label: "UTC +5:30 (Delhi, India)" },
      ],
    },
  ]
  return (
    <div className="py-[20px]">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Settings</h1>
          <Topbar />
        </div>
        <div className="grid grid-cols-12 gap-y-5 gap-x-4 items-center bg-[#2E353A] px-5 py-6 rounded-xl">
          <div className="md:col-span-6 col-span-12">
            <SelectField
              id="Local Currency"
              label="Local Currency"
              options={currencyOptions}
              placeholder="USD"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <SelectField
              id="Time Zone"
              label="Time Zone"
              options={timeZoneOptions}
              placeholder="(GMT - 12:00) International Date Line West"
            />
          </div>
          <div className="col-span-12 flex items-center justify-end mt-5">
            <Button className="text-[14px] leading-tight bg-primary w-[137px] h-[34px] rounded-full hover:bg-primary/80">
              Save
            </Button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-12 gap-y-5 gap-x-4 items-center bg-[#2E353A] px-5 py-6 rounded-xl">
            <div className="col-span-12">
                <h3 className="text-[17px] leading-tight font-semibold">Notifications</h3>
            </div>
          <div className="col-span-12 flex items-center gap-x-3">
          <Switch checked={true}/>
          <span className="sm:text-sm text-xs leading-tight font-normal">I send or receive digital currency</span>
          </div>
          <div className="col-span-12 flex items-center gap-x-3">
          <Switch/>
          <span className="sm:text-sm text-xs leading-tight font-normal">I receive merchant order</span>
          </div>
          <div className="col-span-12 flex items-center gap-x-3">
          <Switch/>
          <span className="sm:text-sm text-xs leading-tight font-normal">Etiam bibendum nisl commodo volutpat</span>
          </div>
            
          <div className="col-span-12 flex items-center justify-end mt-5">
            <Button className="text-[14px] leading-tight bg-primary w-[137px] h-[34px] rounded-full hover:bg-primary/80">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
