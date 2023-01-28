/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { useRouter } from "next/router";

export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const router = useRouter();
//   try {
//     const client = await clientPromise;
//     // Get the "sample_mflix" database
//     const db = client.db("sample_mflix");
//     // Find all documents in the "movies" collection, sort by metacritic in descending order,
//     // limit the result to 10, and convert it to an array
//     const movies = await db
//       .collection("series") // Collection name
//       .find({_id: id}) // Find all documents.
//       .sort({ metacritic: -1 }) // | -1 = descending | 1= ascending |
//       .limit(20) // limit to only 10 results
//       .toArray(); // convert the cursor returned by the find() method into an array.

//     res.json(movies);
//   } catch (e) {
//     // Log any errors to the console
//     console.error(e);
//   }
};
