// React Router Dom
import { Link } from "react-router-dom"
// Media
import Template1 from "media/dashboard/templates/1.jpg"

export default function Templates() {
  return (
    <div className="py-[20px]">
      <div className="sm:px-[30px] px-[15px]">
        <div className="pb-3 flex items-center justify-between">
          <h1 className="text-[26px] leading-tight font-semibold">Templates</h1>
          <Link
            to="/dashboard/strategy-builder"
            className="text-xs font-semibold leading-tight w-[120px] h-[34px] bg-primary flex items-center justify-center rounded-full transition-all ease-in-out duration-500 hover:bg-primary/80"
          >
            + Create New
          </Link>
        </div>
        <div className="bg-[#2E353A] py-[15px] px-[15px] rounded-[10px] md:h-screen">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {["23 may, 2024","24 may, 2024"].map((e,i)=>(
                <div key={i} className="bg-[#52585C80] px-[10px] pt-[10px] pb-[15px] rounded-xl">
                <img
                  src={Template1}
                  alt="template_1"
                  className="mb-4 rounded-[8px] w-full"
                />
                <h3 className="text-base text-white leading-tight font-semibold my-1.5">
                  Template {++i}
                </h3>
                <p className="text-xs text-white/50 leading-normal font-normal">
                Created on {e}
                </p>
                <Link
                  to="/dashboard/strategy-builder"
                  className="mt-5 mx-auto text-xs font-semibold leading-tight w-[170px] h-[34px] bg-primary flex items-center justify-center rounded-full transition-all ease-in-out duration-500 hover:bg-primary/80"
                >
                  Create From Tempalte
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
