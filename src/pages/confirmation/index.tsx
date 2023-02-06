import { klarnaHtml } from "@/utils/formatHtmlSnippet";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface ConfirmationProps {}

const Confirmation: FC<ConfirmationProps> = ({}) => {
  const router = useRouter();
  const { query } = router;
  const [response, setResponse] = useState<any>(null);
  console.log(response);
  const placeOrder = async (order_id: string) => {
    const res = await fetch(`/api/klarna?order_id=${order_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    if (query.order_id) {
      placeOrder(query.order_id as string);
    }
  }, [query.order_id]);

  if (!response) return <h2>LOADING...</h2>;

  return (
    <iframe
      title='klarnaCheckout'
      style={{ height: "300vh" }}
      height={400}
      width={"100%"}
      srcDoc={klarnaHtml(response?.html_snippet)}
      frameBorder='0'></iframe>
  );
};

export default Confirmation;
