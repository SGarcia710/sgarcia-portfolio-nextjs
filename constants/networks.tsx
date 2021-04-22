import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

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

export default NETWORKS;
