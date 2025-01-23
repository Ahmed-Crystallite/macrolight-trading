import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/Calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "../ui/Select"
import { Separator } from "../ui/Separator"

// DatePicker Component
export function DatePicker() {
  const [date, setDate] = React.useState(null)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Label
            htmlFor="date-of-birth"
            className="block mb-2 text-sm font-semibold leading-tight"
          >
            Date of birth
          </Label>
          <div className="cursor-pointer bg-[#091620] relative rounded-md h-[46px] border border-[#091620] placeholder:text-white">
            <Input
              type="text" // Changed to text since it's not a disabled field
              className="border-none h-full rounded-md cursor-pointer"
              value={date ? format(date, "PPP") : "01/09/2025"}
              readOnly
            />
            <div className="absolute top-3 left-3 text-sm">
              {date ? format(date, "PPP") : "01/09/2025"}
            </div>
            <CalendarIcon className="text-white/50 absolute top-2.5 right-3" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

// SelectField Component
export function SelectField({ id, label, options, placeholder }) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold leading-tight"
      >
        {label}
      </Label>
      <Select id={id}>
        <SelectTrigger className="w-full border-none h-[46px] bg-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-[300px] overflow-auto bg-black text-white border-none">
          {options.map((group) => (
            <SelectGroup key={group.label}>
              <SelectLabel>{group.label}</SelectLabel>
              {group.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

// InputField Component
export function InputField({
  id,
  label,
  type,
  placeholder,
  minLength,
  maxLength,
}) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold leading-tight"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        className="bg-[#091620] h-[46px] border border-[#091620] placeholder:text-white"
      />
    </div>
  )
}

// Form Component
export default function Form() {
  const cityOptions = [
    {
      label: "North America",
      items: [
        { value: "new_york", label: "New York" },
        { value: "los_angeles", label: "Los Angeles" },
        { value: "toronto", label: "Toronto" },
        { value: "vancouver", label: "Vancouver" },
        { value: "mexico_city", label: "Mexico City" },
        { value: "montreal", label: "Montreal" },
      ],
    },
    {
      label: "Europe",
      items: [
        { value: "london", label: "London" },
        { value: "paris", label: "Paris" },
        { value: "berlin", label: "Berlin" },
        { value: "madrid", label: "Madrid" },
        { value: "rome", label: "Rome" },
      ],
    },
  ]

  // Data for countries
  const countryOptions = [
    {
      label: "North America",
      items: [
        { value: "usa", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
      ],
    },
    {
      label: "Europe",
      items: [
        { value: "uk", label: "United Kingdom" },
        { value: "france", label: "France" },
        { value: "germany", label: "Germany" },
        { value: "spain", label: "Spain" },
        { value: "italy", label: "Italy" },
      ],
    },
  ]

  const dynamicFields = [
    { id: "Name", type: "text", placeholder: "Justin Philips", label: "Name" },
    {
      id: "Email",
      type: "email",
      placeholder: "justin_Philips@gmail.com",
      label: "Email",
    },
    {
      id: "Address",
      type: "text",
      placeholder: "851, Central square, Brooklyn",
      label: "Address",
    },
    {
      id: "Postal Code",
      type: "number",
      placeholder: "25481",
      label: "Postal Code",
      minLength: 5,
      maxLength: 9,
    },
  ]

  return (
    <div className="col-span-12 grid md:grid-cols-2 grid-cols-1 gap-5">
      {dynamicFields.map((field) => (
        <InputField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          minLength={field.minLength}
          maxLength={field.maxLength}
        />
      ))}
      <SelectField
        id="city"
        label="City"
        options={cityOptions}
        placeholder="Select a city"
      />
      <SelectField
        id="country"
        label="Country"
        options={countryOptions}
        placeholder="Select a country"
      />
    </div>
  )
}
