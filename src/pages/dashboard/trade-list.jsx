import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/cnIndex"
import GraphUp from "media/dashboard/graph_up.svg"
import GraphDown from "media/dashboard/graph_down.svg"
import { Info, Trash2 } from "lucide-react"

export default function TradeList() {
  const columns2 = [
    "Markets",
    "Change",
    "",
    "Sell",
    "Buy",
    "High",
    "Low",
    "Sentiment",
    "Action",
  ]
  const initialData = Array.from({ length: 40 }, (_, i) => ({
    market: i % 2 === 0 ? "AMZN (Amazon)" : "GOOGL (Google)",
    change: `-${(Math.random() * 30).toFixed(1)} (${(Math.random() * 5).toFixed(
      2
    )}%)`,
    graph: i % 2 === 0 ? GraphUp : GraphDown,
    sell: (Math.random() * 500).toFixed(2),
    buy: (Math.random() * 500).toFixed(2),
    high: (Math.random() * 200).toFixed(2),
    low: (Math.random() * 200).toFixed(2),
    sentiment: `${(Math.random() * 100).toFixed(1)}% Buying`,
    sentimentBar: (Math.random() * 100).toFixed(1),
  }))

  const [data, setData] = useState(initialData)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const totalPages = Math.ceil(data.length / pageSize)

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index)
    setData(updatedData)
  }

  return (
    <div className="py-[20px] h-screen">
      <div className="sm:px-[30px] px-[15px]">
        <div className="pb-3 flex items-center justify-between">
          <h1 className="text-[26px] leading-tight font-semibold">
            Trade List
          </h1>
          <Link
            to="/dashboard/strategy-builder"
            className="text-xs font-semibold leading-tight w-[120px] h-[34px] bg-primary flex items-center justify-center rounded-full transition-all ease-in-out duration-500 hover:bg-primary/80"
          >
            + Create New
          </Link>
        </div>
        <div className="bg-[#2E353A] py-[15px] px-[15px] rounded-[10px] h-full">
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
              {paginatedData.map((item, i) => (
                <TableRow key={i} className="bg-[#52585C80] hover:bg-[#52585C]">
                  <TableCell className="py-[15px]">{item.market}</TableCell>
                  <TableCell className="py-[15px]">{item.change}</TableCell>
                  <TableCell className="py-[15px]">
                    <img src={item.graph} alt="graph" />
                  </TableCell>
                  <TableCell className="py-[15px]">{item.sell}</TableCell>
                  <TableCell className="py-[15px]">{item.buy}</TableCell>
                  <TableCell className="py-[15px]">{item.high}</TableCell>
                  <TableCell className="py-[15px]">{item.low}</TableCell>
                  <TableCell className="py-[15px] text-white/70">
                    {item.sentiment}
                    <div className="relative w-full h-2 bg-[#5EFFAE30] rounded-full mt-1.5">
                      <span
                        className="absolute h-full bg-[#5EFFAE] rounded-full"
                        style={{ width: `${item.sentimentBar}%` }}
                      ></span>
                    </div>
                  </TableCell>
                  <TableCell className="py-[15px]">
                    <div className="flex items-center gap-x-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="text-white/50 size-6" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                            <p>
                              Lorem ipsum dolor sit amet lectus consectetur
                              malesuada.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <Trash2
                        onClick={() => handleDelete(i)}
                        className="text-white/50 size-6 hover:text-red-500 transition-all ease-in-out duration-500 cursor-pointer"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Pagination className="justify-end mt-4 rounded-xl">
            <PaginationContent className="gap-0 rounded-xl">
              <PaginationItem className="bg-transparent hover:!bg-transparent">
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem
                  key={i}
                  className="bg-transparent hover:!bg-transparent"
                >
                  <PaginationLink
                    href="javascript:;"
                    onClick={() => handlePageChange(i + 1)}
                    className={
                      currentPage === i + 1
                        ? "text-white bg-primary font-semibold"
                        : ""
                    }
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem className="bg-transparent hover:!bg-transparent">
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
