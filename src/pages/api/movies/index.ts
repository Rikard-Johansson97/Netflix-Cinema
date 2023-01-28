/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const type = req.query.type;
  const sort = req.query.sort;
  const order = Number(req.query.order);
  const limit = Number(req.query.limit);
  const genre = req.query.genre;

  const search = req.query.search;

  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find({
        type: type,
        genres: genre ? { $in: [genre] } : { $exists: true },
        title: search ? { $regex: search, $options: 'i' } : { $exists: true },
      })

      .sort({ [sort]: order })
      .limit(limit)
      .toArray();

    const validMovies = await Promise.all(
      movies.map(async (movie) => {
        if (await checkImage(movie.poster)) {
          return movie;
        }
        return false;
      })
    );

    res.json(validMovies.filter(Boolean));
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

const checkImage = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
