import { Navbutton } from './navbutton';
import styles from './navbar.module.scss';
import msgImg from '../assets/images/messages.png';
import gmailImg from '../assets/images/gmail.png';
import xImg from '../assets/images/x.png';
import tinderImg from '../assets/images/tinder.png';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Navbutton href='messages' size='28'>
        {msgImg}
      </Navbutton>
      <Navbutton href='gmail' size='28'>
        {gmailImg}
      </Navbutton>
      <Navbutton href='x' size='25'>
        {xImg}
      </Navbutton>
      <Navbutton href='tinder' size='26'>
        {tinderImg}
      </Navbutton>
    </nav>
  );
};
