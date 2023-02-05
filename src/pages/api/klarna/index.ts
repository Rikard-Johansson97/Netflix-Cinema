import { SeatType } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";

interface CurrentTickets {
  total_amount: number,
  quantity: number, 
  unit_price: number
  total_tax_amount: number,
  tax_rate: number

}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;
    case "GET":
      console.log(req.query)
      await retrieveOrder(req , res, req.query.order_id);
      break;  
    default:
      res.status(500).send("WRONG METHOD");
      break;
  }
}

const getKlarnaAuth = () => {
  const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const password = process.env.NEXT_PUBLIC_SECRET_KEY;

  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");

  return auth;
};

function formatAsOrderLines(currentTickets : CurrentTickets[]) {
	currentTickets.forEach((Ticket : CurrentTickets) => {
		Ticket.total_amount = Ticket.quantity * Ticket.unit_price;
		Ticket.total_tax_amount = Ticket.total_amount - (Ticket.total_amount * 10000) / (10000 + Ticket.tax_rate);
	});
	return currentTickets;
}

function formatProduct(ticket : SeatType) {
  console.log(ticket)
	return {
		type: 'physical', // same
		reference: ticket.id,
		name: ticket.movieName,
		quantity: 1,
		quantity_unit: 'pcs', // same
		unit_price: ticket.price * 100,
		tax_rate: 2500, // same
		total_discount_amount: 0, // same
		image_url: ticket.image
	};
}

const createOrder = async (req : NextApiRequest,res : NextApiResponse) => {
  try {
    if (req.method !== "POST") return res.status(404); 
  const ticket = req.body
  console.log(ticket)
	const formattedProduct = ticket.map(formatProduct);
	const order_lines = formatAsOrderLines(formattedProduct);

	let order_amount = 0;
	let order_tax_amount = 0;

	order_lines.forEach((item : CurrentTickets) => {
		order_amount += item.total_amount;
		order_tax_amount += item.total_tax_amount;
	});

  const auth = getKlarnaAuth();
  const url = "https://api.playground.klarna.com/checkout/v3/orders/";

  const headers = {
    Authorization: auth,
    "content-type": "application/json",
  };
  const payload = {
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-SE",
    order_amount: order_amount,
    order_tax_amount: order_tax_amount,
    order_lines,
    merchant_urls: {
      terms: "https://www.example.com/terms.html",
      checkout: "https://www.example.com/checkout.html",
      confirmation: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/confirmation?order_id={checkout.order.id}`,
      push: "https://www.example.com/api/push",
    },
  };

  const body = JSON.stringify(payload);
  const response = await fetch(url, {
    body,
    headers,
    method: "POST",
  });
  const data = await response.json();

  res.status(200).json(data);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

const retrieveOrder = async (req: NextApiRequest, res: NextApiResponse, order_id: any) => {
  try {
    const auth = getKlarnaAuth();
    const url = `https://api.playground.klarna.com/checkout/v3/orders/${order_id}`;

    const headers = {
      Authorization: auth,
    };

    const response = await fetch(url, { headers });
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};



