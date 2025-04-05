import { useGSAP } from '@gsap/react';
import styles from './gmail.module.scss';
import gsap from 'gsap';
import { MailPreview } from '../components/mailPreview';

export const Gmail = () => {
  useGSAP(() => {
    gsap.from('#gmail', {
      translateY: 72,
      translateX: -32,
      scale: '0',
      // opacity: 0,
      duration: 0.4,
      ease: 'power1.out',
    });
  });
  return (
    <div id='gmail' className={styles.gmail}>
      <header>
        <h1>Gmail</h1>
      </header>
      <section>
        <div>
          <MailPreview
            title='[GitHub] Your password has changed'
            author='GitHub'
            date='5 Avr'
          >
            Hello NiteChill, We wanted to let you know that your GitHub password
            has changed. If you did not perform this action, you can recover
            access by entering puissantachille@gmail.com into the form at
            https://github.com/password_reset To secure your account, follow the
            steps outlined by
            https://docs.github.com/articles/preventing-unauthorized-access To
            see this and other security events for your account, visit
            https://github.com/settings/security-log If you run into problems,
            please contact support by visiting https://github.com/contact Please
            do not reply to this email with your password. We will never ask for
            your password, and we strongly discourage you from sharing it with
            anyone.
          </MailPreview>
          <MailPreview
            title='[GitHub] Your password has changed'
            author='GitHub'
            date='5 Avr'
          >
            Hello NiteChill, We wanted to let you know that your GitHub password
            has changed. If you did not perform this action, you can recover
            access by entering puissantachille@gmail.com into the form at
            https://github.com/password_reset To secure your account, follow the
            steps outlined by
            https://docs.github.com/articles/preventing-unauthorized-access To
            see this and other security events for your account, visit
            https://github.com/settings/security-log If you run into problems,
            please contact support by visiting https://github.com/contact Please
            do not reply to this email with your password. We will never ask for
            your password, and we strongly discourage you from sharing it with
            anyone.
          </MailPreview>
          <MailPreview
            title='[GitHub] Your password has changed'
            author='GitHub'
            date='5 Avr'
          >
            Hello NiteChill, We wanted to let you know that your GitHub password
            has changed. If you did not perform this action, you can recover
            access by entering puissantachille@gmail.com into the form at
            https://github.com/password_reset To secure your account, follow the
            steps outlined by
            https://docs.github.com/articles/preventing-unauthorized-access To
            see this and other security events for your account, visit
            https://github.com/settings/security-log If you run into problems,
            please contact support by visiting https://github.com/contact Please
            do not reply to this email with your password. We will never ask for
            your password, and we strongly discourage you from sharing it with
            anyone.
          </MailPreview>
        </div>
        <article>{/* mail */}</article>
      </section>
    </div>
  );
};
