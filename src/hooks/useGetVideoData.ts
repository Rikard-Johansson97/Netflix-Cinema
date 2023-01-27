import { useState, useEffect } from 'react';
import axios from 'axios';
import { Youtube } from '@/types/youtube';

export function useGetVideoData(movieTitle : string) {
  const [videoData, setVideoData] = useState<Youtube | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.YOUTUBE_API_KEY;
  console.log(API_KEY)
  const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle)}&key=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(SEARCH_URL);
        const {data} = response
        
        setVideoData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [movieTitle]);

  return { videoData, isLoading };
}
