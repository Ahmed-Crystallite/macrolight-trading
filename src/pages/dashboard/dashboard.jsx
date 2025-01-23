
import {
  AvailableStrategies,
  PaperTradingAccount,
  PaperTradingControl,
  PositionSummary,
  RiskAndRatioAnalysis,
} from "@/components"

export default function Dashboard() {
  return (
    <div className="py-[20px]">
      <div className="px-4">
        <div className="pb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <PaperTradingAccount />
          <PositionSummary />
          <PaperTradingControl />
          <RiskAndRatioAnalysis/>
          <AvailableStrategies/>
        </div>
      </div>
    </div>
  )
}
