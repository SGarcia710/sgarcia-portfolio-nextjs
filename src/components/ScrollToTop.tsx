import { useEffect, useState } from 'react';
import { window } from 'browser-monads';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

const Container = styled(motion.a)`
  position: fixed;
  right: 4vw;
  bottom: 4vw;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: white;
  }
`;

const Arrow = styled.a``;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Behavior: smooth keeps it smooth! but this is not supported by safari and IE
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          href="#top"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <IoIosArrowUp />
        </Container>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
