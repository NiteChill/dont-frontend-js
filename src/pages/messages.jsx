import { useGSAP } from '@gsap/react';
import styles from './messages.module.scss';
import gsap from 'gsap';

export const Messages = () => {
  useGSAP(() => {
    gsap.from('#messages', {
      translateY: 72,
      translateX: -96,
      scale: '0',
      // opacity: 0,
      duration: 0.4,
      ease: 'power1.out',
    })
  })
  return (
    <div id='messages' className={styles.messages}>
      <header>
        <h1>Messages - Brigitte</h1>
      </header>
      <section>
        {/* content */}
      </section>
      <footer>
        {/* footer */}
      </footer>
    </div>
  );
};
