import { YoutubeType } from '@/types/youtube';
import { useState, useEffect } from 'react';

export function useGetVideoData(movieTitle : string) {
  const [videoData, setVideoData] = useState<YoutubeType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle)}&key=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(SEARCH_URL);
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [movieTitle, SEARCH_URL]);

  return { videoData, isLoading };
}

