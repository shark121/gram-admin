import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { dataTuple } from "./products/phones/phones"  




export default function GenerateTable({data}: {data: dataTuple[]}){
   const tableData = data.map((data) => {
    return(
        data[1]
    )
   })
   console.log(tableData)

    return(
        <div>Table</div>
    )
}