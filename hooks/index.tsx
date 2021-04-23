import { useEffect, useState } from 'react';

export const useLogoAnimation = () => {
  const [animation, setAnimation] = useState();
  const loadAnimation = async () => {
    const data = await import('../assets/lottie/code.json');
    setAnimation(data as any);
  };

  useEffect(() => {
    loadAnimation();
  }, []);

  return animation;
};
export const useGhostAnimation = () => {
  const [animation, setAnimation] = useState();
  const loadAnimation = async () => {
    const data = await import('../assets/lottie/ghost.json');
    setAnimation(data as any);
  };

  useEffect(() => {
    loadAnimation();
  }, []);

  return animation;
};
