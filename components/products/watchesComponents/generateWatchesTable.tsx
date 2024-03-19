import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tab } from "@headlessui/react";

export type tableDataType = [nameID: string, { [key: string]: number }];

export default function GenerateGenericTable({
  data,
  setCurrentImage
}: {
  setCurrentImage : React.Dispatch<React.SetStateAction<string>>;
  data: tableDataType[];
}) {
    console.log(data);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* <TableRow>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
          <TableCell>
            <Button>Image</Button>
          </TableCell>{" "}
        </TableRow> */}
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data[0]}</TableCell>
            <TableCell>{Object.values(data[1])[0]}</TableCell>
            <TableCell>{"price"}</TableCell>
            <TableCell>
              <Button onMouseDown={()=>setCurrentImage(data[0])}>Image</Button>
            </TableCell>{" "}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
