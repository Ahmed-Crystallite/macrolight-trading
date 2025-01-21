// React Router Dom
import { Link } from "react-router-dom"

//  Components
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui"
import { useState } from "react"

const PositionSummary = () => {
  const columns = [
    "Order #",
    "Ticker",
    "Open Time",
    "Quantity",
    "Action",
    "Buy Price",
    "Option Type",
    "Strike Price",
    "Expiry Date",
  ]

  const data = Array.from({ length: 20 }, (_, i) => ({
    order: 5480 + i,
    ticker: i % 2 === 0 ? "GOOGL" : "AAPL",
    openTime: `${i % 24}:00:00`,
    quantity: (i % 5) + 1,
    action: i % 2 === 0 ? "Buy" : "Sell",
    buyPrice: `$${(Math.random() * 10).toFixed(2)}`,
    optionType: i % 2 === 0 ? "Call" : "Put",
    strikePrice: `$${(Math.random() * 200).toFixed(2)}`,
    expiryDate: "2024-09-13",
  }))

  const data1 = Array.from({ length: 20 }, (_, i) => ({
    order: 5480 + i,
    ticker: i % 2 === 0 ? "GOOGL" : "AAPL",
    openTime: `${i % 24}:00:00`,
    quantity: (i % 5) + 1,
    action: i % 2 === 0 ? "Buy" : "Sell",
    buyPrice: `$${(Math.random() * 10).toFixed(2)}`,
    optionType: i % 2 === 0 ? "Call" : "Put",
    strikePrice: `$${(Math.random() * 200).toFixed(2)}`,
    expiryDate: "2024-09-13",
  }))

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4
  const pageSize1 = 3
  const totalPages = Math.ceil(data.length / pageSize)

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )
  const paginatedData1 = data1.slice(
    (currentPage - 1) * pageSize1,
    currentPage * pageSize1
  )

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="lg:col-span-6 col-span-12">
      <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold leading-tight">Positions Summary</h2>
          <Link
            to="/dashboard/trade-list"
            className="bg-primary h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-sm font-semibold tracking-wide"
          >
            Trade List
          </Link>
        </div>
        <Tabs defaultValue="option">
          <TabsList className="mb-3">
            <TabsTrigger value="option">Options</TabsTrigger>
            <TabsTrigger value="shares">Shares</TabsTrigger>
          </TabsList>
          <TabsContent value="option">
            <Table size="3">
              <TableHeader>
                <TableRow className="bg-[#091620] rounded-lg">
                  {columns.map((column, i) => (
                    <TableHead key={i} className="py-[10px]">
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((item, i) => (
                  <TableRow key={i} className="bg-[#52585C80] hover:bg-[#52585C]">
                    <TableCell className="py-[15px]">{item.order}</TableCell>
                    <TableCell className="py-[15px]">{item.ticker}</TableCell>
                    <TableCell className="py-[15px]">{item.openTime}</TableCell>
                    <TableCell className="py-[15px]">{item.quantity}</TableCell>
                    <TableCell className="py-[15px]">{item.action}</TableCell>
                    <TableCell className="py-[15px]">{item.buyPrice}</TableCell>
                    <TableCell className="py-[15px]">
                      {item.optionType}
                    </TableCell>
                    <TableCell className="py-[15px]">
                      {item.strikePrice}
                    </TableCell>
                    <TableCell className="py-[15px]">
                      {item.expiryDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="shares">
            <Table size="3">
              <TableHeader>
                <TableRow className="bg-[#091620] rounded-lg">
                  {columns.map((column, i) => (
                    <TableHead key={i} className="py-[10px]">
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData1.map((item, i) => (
                  <TableRow key={i} className="bg-[#52585C80] hover:bg-[#52585C]">
                    <TableCell className="py-[15px]">{item.order}</TableCell>
                    <TableCell className="py-[15px]">{item.ticker}</TableCell>
                    <TableCell className="py-[15px]">{item.openTime}</TableCell>
                    <TableCell className="py-[15px]">{item.quantity}</TableCell>
                    <TableCell className="py-[15px]">{item.action}</TableCell>
                    <TableCell className="py-[15px]">{item.buyPrice}</TableCell>
                    <TableCell className="py-[15px]">
                      {item.optionType}
                    </TableCell>
                    <TableCell className="py-[15px]">
                      {item.strikePrice}
                    </TableCell>
                    <TableCell className="py-[15px]">
                      {item.expiryDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
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
                    currentPage === i + 1 ? "text-white bg-primary font-semibold" : ""
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
  )
}

export default PositionSummary
