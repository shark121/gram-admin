"use client";
import { OrderObjectType } from "../../../../components/orderComponents/generateOrdersTable";
import React, { useEffect, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DeliveryStatusAray = [
  "deliveryOnRoute",
  "orderConfirmed",
  "pickupAvailable",
  "packageReady",
  "paymentReceived",
];

function OrderStatus({
  status,
  currentOrderState,
  statusSetStateMap,
  statusValue,
}: {
  statusValue: boolean;
  statusSetStateMap: {
    [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
  };
  status: string;
  currentOrderState:
    | { orderID: string; orderData: OrderObjectType }
    | undefined;
}) {
  console.log(currentOrderState?.orderData, status);

  console.log(statusValue, "status");
  return (
    <div className="flex h-[2rem] p-2  font-medium  rounded-md">
      <div className="flex h-[2rem] p-2  font-medium  rounded-md gap-4">
        {status}{" "}
        {
          <Checkbox
            defaultChecked={statusValue}
            id={status}
            onCheckedChange={(e) => {
              statusSetStateMap[status](e);
            }}
          />
        }
      </div>
    </div>
  );
}

export default function OrderItem({
  params,
  ordersData,
}: {
  params: { orderID: string[] };
  ordersData: { orderID: string; orderData: OrderObjectType }[];
}) {
  const [orderDataState, setOrderDataState] = useState<
    { orderID: string; orderData: OrderObjectType }[] | null
  >(null);

  const [currentOrderState, setCurrentOrderState] = useState<
    { orderID: string; orderData: OrderObjectType } | undefined
  >();
  let [totalState, setTotalState] = useState<number>(0);

  const [deliveryOnRouteState, setDeliveryOnRouteState] = useState<boolean>();
  const [orderConfirmedState, setOrderConfirmedState] = useState<boolean>();
  const [pickupAvailableState, setPickupAvailableState] = useState<boolean>();
  const [packageReadyState, setPackageReadyState] = useState<boolean>();
  const [paymentReceivedState, setPaymentReceivedState] = useState<boolean>();

  const statusSetStateMap = {
    deliveryOnRoute: setDeliveryOnRouteState,
    orderConfirmed: setOrderConfirmedState,
    pickupAvailable: setPickupAvailableState,
    packageReady: setPackageReadyState,
    paymentReceived: setPaymentReceivedState,
  };

  const statusValueMap = {
    deliveryOnRoute: deliveryOnRouteState,
    orderConfirmed: orderConfirmedState,
    pickupAvailable: pickupAvailableState,
    packageReady: packageReadyState,
    paymentReceived: paymentReceivedState,
  };

async  function handleSave() {

  const isPending = Boolean(!(deliveryOnRouteState && orderConfirmedState && pickupAvailableState && packageReadyState && paymentReceivedState));
  console.log(isPending, "isPending");
  await fetch(`/api/update/order/${params.orderID[0]}`, {
    method: "PATCH",
    body: JSON.stringify({
      deliveryOnRoute: deliveryOnRouteState,
      orderConfirmed: orderConfirmedState,
      pickupAvailable: pickupAvailableState,
      packageReady: packageReadyState,
      paymentReceived: paymentReceivedState,
      pending: isPending,
    }),
  
  }).then((res) => {
    window.alert("success")
    window.location.href = "/orders";

  });
}

  useEffect(() => {
    const ordersDataFromStorage = sessionStorage.getItem("ordersData");
    if (ordersDataFromStorage) {
      setOrderDataState(JSON.parse(ordersDataFromStorage));
    }
  }, []);

  useEffect(() => {
    if (orderDataState) {
      setCurrentOrderState(
        Object.values(orderDataState).find(
          (order) => order && order.orderID === params.orderID[0]
        )
      );
    }
  }, [orderDataState]);

  useEffect(() => {
    if (currentOrderState) {
      currentOrderState.orderData.itemsInfo.map((item) => {
        setTotalState((totalState) => totalState + item.price * item.qty);
      });

      setDeliveryOnRouteState(currentOrderState.orderData.deliveryOnRoute);
    }
    setOrderConfirmedState(currentOrderState?.orderData.orderConfirmed);
    setPickupAvailableState(currentOrderState?.orderData.pickupAvailable);
    setPackageReadyState(currentOrderState?.orderData.packageReady);
    setPaymentReceivedState(currentOrderState?.orderData.paymentReceived);
    setDeliveryOnRouteState(currentOrderState?.orderData.deliveryOnRoute);
  }, [currentOrderState]);

  useEffect(() => {
    console.log(deliveryOnRouteState, "deliveryOnRouteState");
    console.log(orderConfirmedState, "orderConfirmedState");
    console.log(pickupAvailableState, "pickupAvailableState");
    console.log(packageReadyState, "packageReadyState");
    console.log(paymentReceivedState, "paymentReceivedState");
  }, [
    deliveryOnRouteState,
    orderConfirmedState,
    pickupAvailableState,
    packageReadyState,
    paymentReceivedState,
  ]);


  if (orderConfirmedState === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <div className="w-full flex justify-center items-center font-bold">
        Delivery for "{"customer Name"}"
      </div>
      <div className="flex h-[10rem] w-full  p-4 flex-wrap items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {currentOrderState &&
            DeliveryStatusAray.map((status, index) => (
              <OrderStatus
                key={index}
                status={status}
                statusValue={statusValueMap[status]}
                currentOrderState={currentOrderState}
                statusSetStateMap={statusSetStateMap}
              />
            ))}
        </div>
        <Button onClick={async () => handleSave()}>Save</Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Type</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentOrderState &&
            currentOrderState.orderData.itemsInfo.map((item, index) => {
              let newTotal = totalState + item.price * item.qty;
              return (
                <TableRow key={index}>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.price * item.qty}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{totalState}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
