import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { Navbar } from './navbar';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Outlet />
      <Navbar />
    </main>
  );
};
