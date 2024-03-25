"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HtmlHTMLAttributes } from "react";

export type cardPropsType = {
  [key: string]: string | number;
};

export default function CardComponent({
  cardProps,
}: {
  cardProps: cardPropsType[];
}) {
  console.log(cardProps);

  return (
    <Card className="w-full ">
      {cardProps?.map(({ displayName, value }) => {
        return (
          <CardContent
            key={displayName}
            className="flex w-full justify-between"
          >
            <p>{displayName}</p>
            <p>{value}</p>
          </CardContent>
        );
      })}
    </Card>
  );
}
