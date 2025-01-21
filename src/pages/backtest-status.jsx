// Media
import Right from "media/dashboard/backtest-status/1.png"
import Left from "media/dashboard/backtest-status/2.png"
export default function BacktestStatus() {
  return (
    <div className="py-[20px]">
      <div className="sm:px-[30px] px-[15px]">
        <h1 className="text-[26px] leading-tight font-semibold mb-5">
          Backtest Status
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-8 col-span-12">
            <img src={Right} alt="img" />
          </div>
          <div className="md:col-span-4 col-span-12">
            <img src={Left} alt="img" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
