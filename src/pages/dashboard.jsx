// React Router Dom
import { Link } from "react-router-dom"
// Component
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
// Media
import Graph from "media/dashboard/graph.png"

export default function Dashboard() {
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
  const data = [
    {
      order: 5480,
      ticker: "GOOGL",
      openTime: "4:00:00",
      quantity: 3,
      action: "Buy",
      buyPrice: "$0.45",
      optionType: "Call",
      strikePrice: "$157.5",
      expiryDate: "2024-09-13",
    },
    {
      order: 5481,
      ticker: "AAPL",
      openTime: "3:45:00",
      quantity: 2,
      action: "Sell",
      buyPrice: "$0.50",
      optionType: "Put",
      strikePrice: "$150.0",
      expiryDate: "2024-08-15",
    },
    {
      order: 5482,
      ticker: "MSFT",
      openTime: "5:00:00",
      quantity: 5,
      action: "Buy",
      buyPrice: "$1.20",
      optionType: "Call",
      strikePrice: "$200.0",
      expiryDate: "2024-12-01",
    },
    {
      order: 5480,
      ticker: "GOOGL",
      openTime: "4:00:00",
      quantity: 3,
      action: "Buy",
      buyPrice: "$0.45",
      optionType: "Call",
      strikePrice: "$157.5",
      expiryDate: "2024-09-13",
    },
  ]
  const data1 = [
    {
      order: 5480,
      ticker: "GOOGL",
      openTime: "4:00:00",
      quantity: 3,
      action: "Buy",
      buyPrice: "$0.45",
      optionType: "Call",
      strikePrice: "$157.5",
      expiryDate: "2024-09-13",
    },
    {
      order: 5481,
      ticker: "AAPL",
      openTime: "3:45:00",
      quantity: 2,
      action: "Sell",
      buyPrice: "$0.50",
      optionType: "Put",
      strikePrice: "$150.0",
      expiryDate: "2024-08-15",
    },
    {
      order: 5480,
      ticker: "GOOGL",
      openTime: "4:00:00",
      quantity: 3,
      action: "Buy",
      buyPrice: "$0.45",
      optionType: "Call",
      strikePrice: "$157.5",
      expiryDate: "2024-09-13",
    },
  ]
  return (
    <div className="py-[20px]">
      <div className="px-4">
        <div className="pb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 ">
            <img src={Graph} alt="graph" className="h-full" />
          </div>
          <div className="col-span-6">
            <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold leading-tight">
                  Positions Summary
                </h2>
                <Link
                  to="/dashboard/trade-list"
                  className="bg-primary h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-sm font-semibold tracking-wide"
                >
                  Trade List
                </Link>
              </div>
              <Tabs defaultValue="option">
                <TabsList>
                  <TabsTrigger value="option">Options</TabsTrigger>
                  <TabsTrigger value="shares">Shares</TabsTrigger>
                </TabsList>
                <TabsContent value="option">
                  <Table size="3">
                    <TableHeader>
                      <TableRow className="bg-[#091620] rounded-lg">
                        {columns.map((column, i) => (
                          <TableHead key={i}>{column}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((item, i) => (
                        <TableRow key={i} className="bg-[#52585C80]">
                          <TableCell>{item.order}</TableCell>
                          <TableCell>{item.ticker}</TableCell>
                          <TableCell>{item.openTime}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.action}</TableCell>
                          <TableCell>{item.buyPrice}</TableCell>
                          <TableCell>{item.optionType}</TableCell>
                          <TableCell>{item.strikePrice}</TableCell>
                          <TableCell>{item.expiryDate}</TableCell>
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
                          <TableHead key={i}>{column}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data1.map((item, i) => (
                        <TableRow key={i} className="bg-[#52585C80]">
                          <TableCell>{item.order}</TableCell>
                          <TableCell>{item.ticker}</TableCell>
                          <TableCell>{item.openTime}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.action}</TableCell>
                          <TableCell>{item.buyPrice}</TableCell>
                          <TableCell>{item.optionType}</TableCell>
                          <TableCell>{item.strikePrice}</TableCell>
                          <TableCell>{item.expiryDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
              <Pagination className="justify-end mt-4 rounded-xl">
                <PaginationContent className="gap-0 rounded-xl">
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="bg-transparent hover:!bg-transparent">
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
