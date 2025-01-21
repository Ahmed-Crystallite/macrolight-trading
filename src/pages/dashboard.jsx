// React Router Dom
import { Link } from "react-router-dom"
// Component
import {
  Button,
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui"
// Media
import Graph from "media/dashboard/graph.png"
import { Info } from "lucide-react"

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
  const columns1 = ["Date", "Value", "Stock Value", "Option Value"]
  const columns2 = ["Strategy", "P/L", "Date", "Action"]
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
  const data2 = [
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
    },
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
    },
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
    },
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
    },
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
    },
  ]
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
    <div className="py-[20px]">
      <div className="px-4">
        <div className="pb-3">
          <h1 className="text-[26px] leading-tight font-semibold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-6 col-span-12 ">
            <img src={Graph} alt="graph" className="h-full" />
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
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
                <TabsList className="mb-3">
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
          <div className="lg:col-span-6 col-span-12">
            <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
              <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
                <h2 className="text-lg font-bold leading-tight">
                  Paper Trading Controls
                </h2>
                <div className="flex items-center gap-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-xs border-none font-semibold tracking-wide">
                        New Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-transparent h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-xs border-primary border text-primary font-semibold tracking-wide">
                        Rename Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-transparent h-[34px] w-[120px] flex items-center justify-center rounded-[40px] text-xs border border-[#FF283F] text-[#FF283F] font-semibold tracking-wide">
                        Delete Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <Table size="3">
                <TableHeader>
                  <TableRow className="bg-[#091620] rounded-lg">
                    {columns1.map((column, i) => (
                      <TableHead key={i}>{column}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data2.map((item, i) => (
                    <TableRow key={i} className="bg-[#52585C80]">
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>{item.stockValue}</TableCell>
                      <TableCell>{item.optionValue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <div className="grid grid-cols-2 gap-5">
                <div className="relative h-[166px] flex flex-col justify-between z-10 bg-[linear-gradient(45deg,_rgba(9,22,32,1)_50%,_rgba(0,119,204,0.4)_100%)] px-5 py-[15px] rounded-[8px]">
                  <span className="absolute -z-10 bg-[linear-gradient(0deg,_rgba(9,22,32,1)_0%,_rgba(0,119,204,1)_100%)]"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium leading-tight">
                      Max Dropdown
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="text-white/50" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                          <p>
                            Lorem ipsum dolor sit amet lectus consectetur
                            malesuada.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h5 className="text-[32px] text-[#FF283F] font-semibold leading-tight">
                    -15.34%
                  </h5>
                </div>
                <div className="relative h-[166px] flex flex-col justify-between z-10 bg-[linear-gradient(45deg,_rgba(9,22,32,1)_50%,_rgba(0,119,204,0.4)_100%)] px-5 py-[15px] rounded-[8px]">
                  <span className="absolute -z-10 bg-[linear-gradient(0deg,_rgba(9,22,32,1)_0%,_rgba(0,119,204,1)_100%)]"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium leading-tight">
                      Winning Trades%
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="text-white/50" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                          <p>
                            Lorem ipsum dolor sit amet lectus consectetur
                            malesuada.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h5 className="text-[32px] text-[#B0DB39] font-semibold leading-tight">
                    63.45%
                  </h5>
                </div>
                <div className="relative h-[166px] flex flex-col justify-between z-10 bg-[linear-gradient(45deg,_rgba(9,22,32,1)_50%,_rgba(0,119,204,0.4)_100%)] px-5 py-[15px] rounded-[8px]">
                  <span className="absolute -z-10 bg-[linear-gradient(0deg,_rgba(9,22,32,1)_0%,_rgba(0,119,204,1)_100%)]"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium leading-tight">
                      Avg. Profit Per Trade
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="text-white/50" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                          <p>
                            Lorem ipsum dolor sit amet lectus consectetur
                            malesuada.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h5 className="text-[32px] text-[#B0DB39] font-semibold leading-tight">
                    2.45%
                  </h5>
                </div>
                <div className="relative h-[166px] flex flex-col justify-between z-10 bg-[linear-gradient(45deg,_rgba(9,22,32,1)_50%,_rgba(0,119,204,0.4)_100%)] px-5 py-[15px] rounded-[8px]">
                  <span className="absolute -z-10 bg-[linear-gradient(0deg,_rgba(9,22,32,1)_0%,_rgba(0,119,204,1)_100%)]"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium leading-tight">
                      Risk/Reward Ratio
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="text-white/50" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#505C65] text-xs font-medium text-white max-w-[220px] text-center">
                          <p>
                            Lorem ipsum dolor sit amet lectus consectetur
                            malesuada.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h5 className="text-[32px] text-[#B0DB39] font-semibold leading-tight">
                    1:3.5
                  </h5>
                </div>
              </div>
            </div>
          </div>
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
                      <TableHead key={i}>{column}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data3.map((item, i) => (
                    <TableRow key={i} className="bg-[#52585C80]">
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>{item.stockValue}</TableCell>
                      <TableCell>{item.optionValue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
