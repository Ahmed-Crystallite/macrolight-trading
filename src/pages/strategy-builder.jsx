// Media
import Builder from "media/dashboard/strategy-builder/1.png"

export default function StrategyBuilder() {
  return (
    <div className="py-[20px]">
      <div className="sm:px-[30px] px-[15px]">
        <h1 className="text-[26px] leading-tight font-semibold mb-5">
          Strategy Builder
        </h1>
        <div className="grid grid-cols-1">
          <img src={Builder} alt="Builder" />
        </div>
      </div>
    </div>
  )
}
