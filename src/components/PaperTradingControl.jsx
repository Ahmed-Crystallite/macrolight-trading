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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@/components/ui"
import { useState } from "react"

const PaperTradingControl = () => {
  const columns1 = ["Date", "Value", "Stock Value", "Option Value"]
  const data2 = [
    {
      date: "2024-09-13",
      value: "25000",
      stockValue: "0",
      optionValue: "-8.5",
      id: 1,
    },
    {
      date: "2024-09-14",
      value: "25500",
      stockValue: "10",
      optionValue: "-7.5",
      id: 2,
    },
    {
      date: "2024-09-15",
      value: "26000",
      stockValue: "5",
      optionValue: "-6.5",
      id: 3,
    },
    {
      date: "2024-09-16",
      value: "26500",
      stockValue: "15",
      optionValue: "-5.5",
      id: 4,
    },
    {
      date: "2024-09-17",
      value: "27000",
      stockValue: "20",
      optionValue: "-4.5",
      id: 5,
    },
    {
      date: "2024-09-18",
      value: "27500",
      stockValue: "25",
      optionValue: "-3.5",
      id: 6,
    },
    {
      date: "2024-09-19",
      value: "28000",
      stockValue: "30",
      optionValue: "-2.5",
      id: 7,
    },
    {
      date: "2024-09-20",
      value: "28500",
      stockValue: "35",
      optionValue: "-1.5",
      id: 8,
    },
    {
      date: "2024-09-21",
      value: "29000",
      stockValue: "40",
      optionValue: "0.5",
      id: 9,
    },
    {
      date: "2024-09-22",
      value: "29500",
      stockValue: "45",
      optionValue: "1.5",
      id: 10,
    },
    {
      date: "2024-09-23",
      value: "30000",
      stockValue: "50",
      optionValue: "2.5",
      id: 11,
    },
    {
      date: "2024-09-24",
      value: "30500",
      stockValue: "55",
      optionValue: "3.5",
      id: 12,
    },
    {
      date: "2024-09-25",
      value: "31000",
      stockValue: "60",
      optionValue: "4.5",
      id: 13,
    },
    {
      date: "2024-09-26",
      value: "31500",
      stockValue: "65",
      optionValue: "5.5",
      id: 14,
    },
    {
      date: "2024-09-27",
      value: "32000",
      stockValue: "70",
      optionValue: "6.5",
      id: 15,
    },
    {
      date: "2024-09-28",
      value: "32500",
      stockValue: "75",
      optionValue: "7.5",
      id: 16,
    },
    {
      date: "2024-09-29",
      value: "33000",
      stockValue: "80",
      optionValue: "8.5",
      id: 17,
    },
    {
      date: "2024-09-30",
      value: "33500",
      stockValue: "85",
      optionValue: "9.5",
      id: 18,
    },
    {
      date: "2024-10-01",
      value: "34000",
      stockValue: "90",
      optionValue: "10.5",
      id: 19,
    },
    {
      date: "2024-10-02",
      value: "34500",
      stockValue: "95",
      optionValue: "11.5",
      id: 20,
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const totalPages = Math.ceil(data2.length / pageSize)

  const startIndex = (currentPage - 1) * pageSize
  const paginatedData = data2.slice(startIndex, startIndex + pageSize)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const dialogActions = [
    {
      text: "New Account",
      buttonClass: "bg-primary hover:bg-primary text-xs",
      dialogTitle: "Create Account",
      dialogDescription: "",
      form: true,
      name: "Create account",
    },
    {
      text: "Rename Account",
      buttonClass:
        "bg-transparent hover:bg-transparent text-xs border border-primary text-primary",
      dialogTitle: "Rename Account",
      dialogDescription: "",
      form: true,
      name: "Rename account",
    },
    {
      text: "Delete Account",
      buttonClass:
        "bg-transparent hover:bg-transparent text-xs border border-[#FF283F] text-[#FF283F]",
      alignments: "max-w-[300px] text-center mt-5 mx-auto",
      dialogTitle: "Are you sure you want to delete your account?",
      dialogDescription: "",
      name: "Enter name",
    },
  ]

  return (
    <div className="lg:col-span-6 col-span-12">
      <div className="bg-[#2E353A] py-[10px] px-[15px] rounded-[10px] h-full">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
          <h2 className="text-lg font-bold leading-tight">
            Paper Trading Controls
          </h2>
          <div className="flex items-center gap-x-2">
            {dialogActions.map((action, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <Button
                    className={`h-[34px] w-[120px] flex items-center justify-center rounded-[40px] font-semibold tracking-wide ${action.buttonClass}`}
                  >
                    {action.text}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#242930] text-white border-none rounded-[6px] sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle
                      className={`${action.alignments} text-base font-bold leading-tight`}
                    >
                      {action.dialogTitle}
                    </DialogTitle>
                    <DialogDescription>
                      {action.dialogDescription}
                    </DialogDescription>
                  </DialogHeader>
                  {action.form ? (
                    <form method="post">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                          type="text"
                          id="name"
                          placeholder={action.name}
                          className="col-span-12 bg-black border-black h-[40px] placeholder:text-white/20"
                        />
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="mt-5">
                          Save changes
                        </Button>
                      </DialogFooter>
                    </form>
                  ) : (
                    <div className="flex items-center justify-center gap-x-3">
                      <Button
                        variant="ghost"
                        className="w-[120px] bg-transparent border-2 border-[#73858F] rounded-full hover:bg-transparent"
                      >
                        No
                      </Button>
                      <Button
                        variant="destructive"
                        className="w-[120px] rounded-full border-2 border-red-500"
                      >
                        Yes
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        <Table size="3">
          <TableHeader>
            <TableRow className="bg-[#091620] rounded-lg">
              {columns1.map((column, i) => (
                <TableHead key={i} className="py-[10px]">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, i) => (
              <TableRow key={i} className="bg-[#52585C80] hover:bg-[#52585C]">
                <TableCell className="py-[15px]">{item.date}</TableCell>
                <TableCell className="py-[15px]">{item.value}</TableCell>
                <TableCell className="py-[15px]">{item.stockValue}</TableCell>
                <TableCell className="py-[15px]">{item.optionValue}</TableCell>
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

export default PaperTradingControl
