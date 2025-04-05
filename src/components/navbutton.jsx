import { Link } from 'react-router-dom';
import styles from './navbutton.module.scss';

export const Navbutton = ({ children, href, size, notification = false }) => {
  return (
    <Link to={href} className={styles.navbutton}>
      <img width={size} height={size} src={children} alt={href} />
      {notification && <div />}
    </Link>
  );
};
