import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

export default function Policies() {
  return (
    <div className="py-[20px]">
      <div className="px-4">
        <div className="mb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Policies</h1>
        </div>
        <div className="bg-[#2E353A] rounded-xl lg:py-[80px] py-[60px] grid grid-cols-1 place-content-center">
          <div className="text-center xl:max-w-full max-w-[550px] mx-auto">
            <h2 className="text-[26px] leading-tight font-bold mb-3">
              Welcome to the Policies Center
            </h2>
            <p className="xl:text-[20px] md:text-base text-sm leading-normal font-normal text-white/50">
              Explore our policies by clicking the links on the left. Each link
              will take you to a detailed policy page.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14 2xl:max-w-[1000px] max-w-[800px] lg:p-0 md:px-10 px-3 mx-auto text-center">
            {[
              [
                "Privacy Policy",
                "Last updated December 15, 2024",
                "Lorem ipsum dolor sit amet consectetur. Semper pulvinar pharetra blandit tempus ornare vitae. Nascetur tellus vulputate at cursus pulvinar tempor risus mattis.",
                "/dashboard/policies/privacy-policy",
              ],
              [
                "Terms of Service",
                "Last updated December 15, 2024",
                "Lorem ipsum dolor sit amet consectetur. Semper pulvinar pharetra blandit tempus ornare vitae. Nascetur tellus vulputate at cursus pulvinar tempor risus mattis.",
                "/dashboard/policies/terms-and-conditions",
              ],
              [
                "Disclaimer",
                "Last updated December 15, 2024",
                "Lorem ipsum dolor sit amet consectetur. Semper pulvinar pharetra blandit tempus ornare vitae. Nascetur tellus vulputate at cursus pulvinar tempor risus mattis.",
                "/dashboard/policies/disclaimer",
              ],
              [
                "Cookie Policy",
                "Last updated December 15, 2024",
                "Lorem ipsum dolor sit amet consectetur. Semper pulvinar pharetra blandit tempus ornare vitae. Nascetur tellus vulputate at cursus pulvinar tempor risus mattis.",
                "/dashboard/policies/cookie-policy",
              ],
            ].map(([title, date, desc, href], i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden z-10"
              >
                <span className="bg-[linear-gradient(-90deg,_rgba(0,119,204,1)_0%,_rgba(9,22,32,1)_100%)] w-full h-full absolute inset-0 -z-10 rounded-xl group-hover:motion-safe:animate-spin"></span>
                <div className="bg-black p-[25px] w-[99.5%] h-[99.5%] m-auto rounded-xl">
                  <h3 className="text-[20px] leading-tight font-semibold">
                    {title}
                  </h3>
                  <span className="block text-white/50 text-sm leading-tight font-normal my-2">
                    {date}
                  </span>
                  <p>{desc}</p>
                  <Button
                    variant="ghost"
                    className="bg-primary w-[137px] h-[34px] rounded-full mt-5 hover:bg-primary/75"
                  >
                    <Link to={href}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
