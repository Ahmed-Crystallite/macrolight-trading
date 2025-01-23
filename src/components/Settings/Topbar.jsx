import { NavLink } from "react-router-dom"

const Topbar = () => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-wrap gap-y-4 gap-x-3 bg-[#2E353A] rounded-xl p-[10px]">
        {[
          ["/dashboard/settings/profile", "Profile"],
          ["/dashboard/settings/preferences", "Preferences"],
          ["/dashboard/settings/security", "Security"],
          ["/dashboard/settings/payment-method", "Payment Method"],
        ].map(([href, text], i) => (
          <li key={i} className="basis-auto">
            <NavLink
              title={text}
              to={href}
              className={({ isActive }) =>
                `flex gap-x-3 items-center justify-center w-max px-5 mx-auto h-[44px] xl:text-lg text-base font-medium capitalize mb-1 hover:bg-black hover:rounded-[5px] hover:text-white transition-all ease-in-out duration-300 ${
                  isActive
                    ? "text-white rounded-[5px] !font-bold bg-[#091620] w-full"
                    : "text-white/65"
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Topbar
