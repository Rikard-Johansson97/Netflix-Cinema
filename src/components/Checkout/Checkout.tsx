import React, { FC, useEffect, useState } from "react";
import { SeatType } from "@/types/types";
import parse from "html-react-parser";
import { klarnaHtml } from "@/utils/formatHtmlSnippet";

interface CheckoutProps {
  seats: SeatType[];
}

const Checkout: FC<CheckoutProps> = ({ seats }) => {
  const [response, setResponse] = useState<any>(null);
  const bookedSeats = seats.filter((seat: SeatType) => {
    if (seat.booked) {
      return seat;
    }
  });

  console.log(response?.html_snippet);

  const placeOrder = async (bookedSeats: SeatType[]) => {
    console.log(bookedSeats);
    const res = await fetch("/api/klarna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookedSeats),
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    placeOrder(bookedSeats);
  }, []);

  return (
    <iframe
      title='klarnaCheckout'
      className='h-100vh'
      height={"520px"}
      srcDoc={klarnaHtml(response?.html_snippet)}
      frameBorder='0'></iframe>
  );
};

export default Checkout;
