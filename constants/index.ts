import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FONTS = {
  plusJakarta: {
    bold: 'Plus Jakarta Sans Bold',
    extraBold: 'Plus Jakarta Sans ExtraBold',
    extraLight: 'Plus Jakarta Sans ExtraLight',
    italic: 'Plus Jakarta Sans Italic',
    light: 'Plus Jakarta Sans Light',
    medium: 'Plus Jakarta Sans Medium',
    regular: 'Plus Jakarta Sans Regular',
  },
};

const COLORS = {
  fontColor: '#b3b9c5',
  headingColor: '#e7b996',
  darkFontColor: '#ced4da',
  background: '#1f2022',
  mediumFontColor: '#dee2e6',
  lightFontColor: '#868e96',
  lightBackground: '#2d2d31',
  lightBackgroundHover: '#3b3b3e',
  codeBackgroundColor: '#2e2e30',
  border: '#404040',
  linkColor: '#6ab0f3',
  linkColorDarker: '#4a72a5',
  linkHoverColor: '#e1a6f2',
  navbarColor: '#1d1d1d',
  blockquote: '#2a4661',
  transparentText: 'rgba(255, 255, 255, 0.7)',
  transparentBg: 'rgba(0, 0, 0, 0.2)',
  lightTransparentBg: 'rgba(255, 255, 255, 0.05)',
  borderColor: '#3b3b3b',
};

const IMAGE_FORMATS = {
  webp: 'webp',
};
const NETWORKS = [
  {
    name: 'Github',
    link: 'https://github.com/SGarcia710',
    icon: <FaGithub />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/sebg96',
    icon: <FaTwitter />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/sebastian-garcia-ospina/',
    icon: <FaLinkedin />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sebgarcia.dev/',
    icon: <FaInstagram />,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCd4WFLJJca151Bt6lPLgfXQ',
    icon: <FaYoutube />,
  },
  {
    name: 'Twitch',
    link: 'https://www.twitch.tv/sgarcia',
    icon: <FaTwitch />,
  },
];

const LINKS = {
  blog: {
    url: '/blog',
    title: 'Blog',
  },
  about: {
    url: '/',
    title: 'About',
  },
  portfolio: {
    url: '/',
    title: 'Portfolio',
  },
  contact: {
    url: '/',
    title: 'Contact',
  },
};

export { FONTS, NETWORKS, COLORS, IMAGE_FORMATS, LINKS };
