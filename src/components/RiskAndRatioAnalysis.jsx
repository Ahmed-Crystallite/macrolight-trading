// React Router Dom
import { Link } from "react-router-dom"
// Component
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/cnIndex"
// Icons
import { Info } from "lucide-react"

const RiskAndRatioAnalysis = () => {
  const analysisData = [
    {
      title: "Max Dropdown",
      value: "-15.34%",
      valueColor: "text-[#FF283F]",
      tooltipText: "Lorem ipsum dolor sit amet lectus consectetur malesuada.",
    },
    {
      title: "Winning Trades%",
      value: "63.45%",
      valueColor: "text-[#B0DB39]",
      tooltipText: "Lorem ipsum dolor sit amet lectus consectetur malesuada.",
    },
    {
      title: "Avg. Profit Per Trade",
      value: "2.45%",
      valueColor: "text-[#B0DB39]",
      tooltipText: "Lorem ipsum dolor sit amet lectus consectetur malesuada.",
    },
    {
      title: "Risk/Reward Ratio",
      value: "1:3.5",
      valueColor: "text-[#B0DB39]",
      tooltipText: "Lorem ipsum dolor sit amet lectus consectetur malesuada.",
    },
  ]
  return (
    <div className="lg:col-span-6 col-span-12">
      <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold leading-tight">
            Risk & Ratio Analysis
          </h2>
          <Link
            to="/dashboard/trade-list"
            className="rounded-[40px] text-sm text-primary font-semibold tracking-wide"
          >
            Trade List
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          {analysisData.map((item, index) => (
            <div
              key={index}
              className="relative h-[166px] flex flex-col justify-between z-10 bg-[linear-gradient(45deg,_rgba(9,22,32,1)_50%,_rgba(0,119,204,0.4)_100%)] px-5 py-[15px] rounded-[8px]"
            >
              <span className="absolute -z-10 bg-[linear-gradient(0deg,_rgba(9,22,32,1)_0%,_rgba(0,119,204,1)_100%)]"></span>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium leading-tight">
                  {item.title}
                </h4>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="text-white/50" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                      <p>{item.tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <h5
                className={`text-[32px] font-semibold leading-tight ${item.valueColor}`}
              >
                {item.value}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RiskAndRatioAnalysis
