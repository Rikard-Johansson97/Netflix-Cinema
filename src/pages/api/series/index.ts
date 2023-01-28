/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    let sort = {};
    if (req.query.sort) {
      sort[req.query.sort] = req.query.sortOrder === "asc" ? 1 : -1;
    } else {
      sort.metacritic = -1;
    }

    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let searchQuery = { type: "movie" } ;
    if (req.query.search) {
      searchQuery.title = { $regex: `.*${req.query.search}.*`, $options: "i" };
    }
    if (req.query.genre) {
      searchQuery.genres = { $in: [req.query.genre] };
    }
    
    // Find all documents in the "movies" collection, sort by the input value,
    // limit the result to the limit value, and convert it to an array
    const movies = await db
      .collection("movies") // Collection name
      .find(searchQuery) // Find all documents based on the searchQuery.
      .sort(sort) // Sort by the input sort.
      .limit(limit) // limit to the input limit.
      .toArray(); // convert the cursor returned by the find() method into an array.
    
    const validMovies = await Promise.all(
      movies.map(async movie => {
        if (await checkImage(movie.poster)) {
          return movie;
        }
        return false;
      })
    );
    const filteredMovies = validMovies.filter(Boolean);
    res.json(filteredMovies);
  } catch (e) {
    // Log any errors to the console
    console.error(e);
    res.status(500).send('Something went wrong');
  }
};

const checkImage = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
