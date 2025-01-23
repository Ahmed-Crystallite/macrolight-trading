// React Router Dom
import { Link } from "react-router-dom"
// Component
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/cnIndex"

const AvailableStrategies = () => {
  const columns2 = ["Strategy", "P/L", "Date", "Action"]

  const data3 = [
    {
      date: "2024-09-13",
      value: "0",
      stockValue: "2024-09-13",
      optionValue: "write",
    },
    {
      date: "2024-09-13",
      value: "0",
      stockValue: "2024-09-13",
      optionValue: "write",
    },
    {
      date: "2024-09-13",
      value: "0",
      stockValue: "2024-09-13",
      optionValue: "write",
    },
    {
      date: "2024-09-13",
      value: "0",
      stockValue: "2024-09-13",
      optionValue: "write",
    },
    {
      date: "2024-09-13",
      value: "0",
      stockValue: "2024-09-13",
      optionValue: "write",
    },
  ]
  return (
    <div className="col-span-12">
      <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold leading-tight">
            Strategies Available
          </h2>
          <Link
            to="/dashboard/strategy-builder"
            className="bg-primary h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-sm font-semibold tracking-wide"
          >
            Create New
          </Link>
        </div>
        <Table size="3">
          <TableHeader>
            <TableRow className="bg-[#091620] rounded-lg">
              {columns2.map((column, i) => (
                <TableHead key={i} className="py-[10px]">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data3.map((item, i) => (
              <TableRow key={i} className="bg-[#52585C80] hover:bg-[#52585C]">
                <TableCell className="py-[15px]">{item.date}</TableCell>
                <TableCell className="py-[15px]">{item.value}</TableCell>
                <TableCell className="py-[15px]">{item.stockValue}</TableCell>
                <TableCell className="py-[15px]">{item.optionValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AvailableStrategies
