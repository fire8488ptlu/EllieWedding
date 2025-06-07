// utils/usePreloadImages.js
import { useEffect, useState } from "react";

const usePreloadImages = (imageList) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageList.length) {
          setLoaded(true);
        }
      };
    });
  }, [imageList]);

  return loaded;
};

export default usePreloadImages;
