import { RootState } from "@/store/store";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SeatType } from "@/types/types";

interface CheckoutProps {
  bookedSeats: SeatType[];
}

const Checkout: FC<CheckoutProps> = ({ bookedSeats }) => {
  const [response, setResponse] = useState<any>(null);

  const placeOrder = async (Tickets: SeatType[]) => {
    const res = await fetch("/api/klarna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookedSeats }),
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    placeOrder(bookedSeats);
  }, [bookedSeats]);

  console.log(bookedSeats);

  return <div></div>;
};

export default Checkout;
