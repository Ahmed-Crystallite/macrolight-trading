// React
import { useState } from "react"
// React Router Dom
import { Link } from "react-router-dom"
// Components
import { Button, Checkbox, Input, Label } from "@/components/ui/cnIndex"
// Icons
import { Eye, EyeClosed, LockKeyhole, User } from "lucide-react"
// Media
import Hero from "media/hero.png"
import Logo from "media/logo.svg"

export default function Login() {
  const [passwordType, setPasswordType] = useState("password")

  const handlePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password")
  }

  return (
    <main>
      <section>
        <div className="grid grid-cols-12 h-screen">
          <div className="bg-primary xl:col-span-8 md:col-span-7 col-span-12 relative z-10 md:block hidden">
            <img
              src={Hero}
              alt="hero"
              loading="eager"
              className="absolute -z-10 w-full h-full object-cover object-top inset-0"
            />
            <div className="container">
              <div className="h-screen flex flex-col justify-center items-start text-white max-w-[700px]">
                <img src={Logo} alt="logo" loading="eager" />
                <h1 className="2xl:text-[46px] xl:text-[43px] lg:text-[38px] md:text-[28px] text-[25px] leading-normal font-sans font-bold my-3">
                  Customizable Options Trading Strategies with No Code
                </h1>
                <p className="text-base leading-normal font-normal max-w-[650px]">
                  Craft a range of options portfolio trading strategies designed
                  to optimize your returns and manage risk effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="md:bg-black bg-primary relative z-10 xl:col-span-4 md:col-span-5 col-span-12 h-screen flex flex-col justify-center items-start text-white">
            <img
              src={Hero}
              alt="hero"
              loading="eager"
              className="md:hidden block absolute -z-10 w-full h-full object-cover object-top inset-0"
            />
            <div className="container">
              <div className="max-w-[380px] mx-auto">
                <h2 className="2xl:text-[32px] lg:text-[30px] text-[25px] leading-tight font-bold mb-3">
                  Login to your account
                </h2>
                <p className="text-base leading-normal font-medium text-white/50">
                  Start managing your finance faster and better
                </p>
                <form
                  action=""
                  className="lg:mt-10 mt-6 grid grid-cols-1 gap-y-6"
                >
                  <div className="flex items-center gap-x-2 bg-[#52585C40] border border-[#A4A9AD] px-4 py-1.5 rounded-[8px]">
                    <Label htmlFor="name">
                      <User className="size-5 md:text-white/30 text-white/70" />
                    </Label>
                    <Input
                      disable={false}
                      required
                      type="text"
                      id="name"
                      className="w-full border-none p-0 focus-visible:ring-0 md:text-white/40 text-white/80 md:placeholder:text-white/40 placeholder:text-white/80 text-[17px] leading-tight font-normal"
                      placeholder="Username"
                    />
                  </div>
                  <div className="flex items-center gap-x-2 bg-[#52585C40] border border-[#A4A9AD] px-4 py-1.5 rounded-[8px]">
                    <Label htmlFor="password">
                      <LockKeyhole className="size-5 md:text-white/30 text-white/70" />
                    </Label>
                    <Input
                      disable={false}
                      type={passwordType}
                      required
                      id="password"
                      className="w-full border-none p-0 focus-visible:ring-0 md:text-white/40 text-white/80 md:placeholder:text-white/40 placeholder:text-white/80 text-[17px] leading-tight font-normal"
                      placeholder="Password"
                    />
                    {passwordType === "password" ? (
                      <Eye
                        onClick={handlePasswordType}
                        className="size-5 md:text-white/30 text-white/70 cursor-pointer"
                      />
                    ) : (
                      <EyeClosed
                        onClick={handlePasswordType}
                        className="size-5 md:text-white/30 text-white/70 cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center gap-x-2">
                      <Checkbox
                        id="terms"
                        className="w-[20px] h-[20px] md:border-[#5E5F61] border-black"
                      />
                      <label
                        htmlFor="terms"
                        className="text-[17px] font-medium leading-tight md:text-white/50 text-white/90 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-right text-[#E33C3C] text-[17px] font-medium leading-tight"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Button
                    className="bg-primary h-12 rounded-3xl text-[17px] leading-tight font-bold hover:bg-primary/9 0"
                    disable={false}
                  >
                    Login
                  </Button>
                </form>
                <div className="text-center mt-8">
                  <span className="block mb-1 text-[18px] font-medium leading-tight">
                    Don’t have an account
                  </span>
                  <Link
                    to="/signup"
                    className="md:text-primary text-black/75 underline text-[18px] font-bold leading-tight"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
