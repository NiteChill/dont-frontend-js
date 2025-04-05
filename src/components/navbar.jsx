import { Navbutton } from './navbutton';
import styles from './navbar.module.scss';
import msgImg from '../assets/images/messages.png';
import gmailImg from '../assets/images/gmail.png';
import xImg from '../assets/images/x.png';
import tinderImg from '../assets/images/tinder.png';
import { GameKeys } from '../constants/games';
import { useNotifications } from '../contexts/useNotifications';

const games = [
  {
    key: GameKeys.Chat,
    img: msgImg,
    size: 28,
  },
  {
    key: GameKeys.Mail,
    img: gmailImg,
    size: 28,
  },
  {
    key: GameKeys.SocialMedia,
    img: xImg,
    size: 25,
  },
  {
    key: GameKeys.Hookup,
    img: tinderImg,
    size: 26,
  },
];

export const Navbar = () => {
  const notifications = useNotifications();

  return (
    <nav className={styles.navbar}>
      {games.map(({ key, img, size }) => (
        <Navbutton key={key} href={key} size={size} notification={!!notifications[key]}>
          {img}
        </Navbutton>
      ))}
    </nav>
  );
};
