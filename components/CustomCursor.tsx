import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window } from 'browser-monads';
import { useRouter } from 'next/router';

const Container = styled.div<{
  isHidden: boolean;
  isClicked: boolean;
  isLinkHovered: boolean;
}>`
  width: 22px;
  height: 22px;
  border: 2px solid #fefefe;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;

  opacity: ${({ isHidden }) => (!!isHidden ? 0 : 1)};

  transform: ${({ isClicked }) =>
    !!isClicked ? 'translate(-50%, -50%) scale(0.9)' : ''};
  background-color: ${({ isClicked }) => (!!isClicked ? '#fefefe' : 'default')};

  transform: ${({ isLinkHovered }) =>
    !!isLinkHovered ? 'translate(-50%, -50%) scale(1.25)' : ''};
  background-color: ${({ isLinkHovered }) =>
    !!isLinkHovered ? '#fefefe' : 'default'};

  a {
    text-decoration: underline;
    color: #fefefe;
  }
`;

const CustomCursor = () => {
  if (window.innerWidth <= 818) return null;

  const router = useRouter();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();

    return () => removeEventListeners();
  }, [router.pathname]);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHovered(true));
      el.addEventListener('mouseout', () => setLinkHovered(false));
    });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Container
      isLinkHovered={linkHovered}
      isHidden={hidden}
      isClicked={clicked}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;

// Credits: https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3
