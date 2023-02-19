/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const client = await clientPromise;
    // Get the "sample_mflix" database
    const db = client.db("sample_mflix");
    // Find all documents in the "movies" collection, sort by metacritic in descending order,
    // limit the result to 10, and convert it to an array
    const movies = await db
      .collection("movies") // Collection name
      .findOne({_id: new ObjectId(id as string)})

    res.json(movies);
  } catch (e) {
    // Log any errors to the console
    console.error(e);
  }
};
