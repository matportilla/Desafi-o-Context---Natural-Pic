import { createContext, useState, useEffect } from 'react';

const baseURL = 'https://api.pexels.com/v1/search?query="japan"&page=1&per_page=20';
const API_KEY = 'r1RBthfXx3M7m7PfUUFmUTQp5fdz0AGZIRvwbhEC6TOh6ABrot0sybZI';

export const Context = createContext();

export function PhotoProvider({ children }) {
  const [fotos, setFotos] = useState([]);
  
  const getData = async () => {
    const res = await fetch(baseURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    const photos = data.photos.map((photo) => {
      return {
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false,
      };
    });

    setFotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}> {children} </Context.Provider>;
}

