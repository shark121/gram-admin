"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export type OrderObjectType = {
  deliveryOnRoute: boolean;
  orderConfirmed: boolean;
  pickupAvailable: boolean;
  packageReady: boolean;
  paymentReceived: boolean;
  userUid: string;
  createdAt?: string;
  itemsInfo: { [key: string]: number }[];
  Location?: string;
  pending: boolean;
};

export default function GenerateOrdersTable({
  ordersData,
}: {
  ordersData: {orderID :string, orderData :OrderObjectType}[];
}) {
  function handleOnclick(orderID: string) {
    window.location.href = `/orders/${orderID}`;
  }

useEffect(() => {
    sessionStorage.setItem("ordersData", JSON.stringify(ordersData));
},[])

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Total Items</TableHead>
          <TableHead>Delivery Paid</TableHead>
          <TableHead className="">Date</TableHead>
          <TableHead>Subtotal</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ordersData.map(({orderID, orderData}, index) => {
          let totalItems = 0;
          let Subtotal = 0;
          orderData.itemsInfo.map((item) => {
            totalItems += item.qty;
          });
          orderData.itemsInfo.map((item) => {
            Subtotal += item.price * item.qty;
          });

          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{totalItems}</TableCell>
              <TableCell>{String(orderData.paymentReceived)}</TableCell>
              <TableCell>{String(orderData.createdAt)}</TableCell>
              <TableCell className="">{Subtotal}</TableCell>
              <TableCell className="">{"invoice.totalAmount"}</TableCell>
              <TableCell className="">{orderData.pending === false ? "completed" : "pending"}</TableCell>
              <TableCell>
                <Button onClick={() => handleOnclick(orderID)}>View</Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
