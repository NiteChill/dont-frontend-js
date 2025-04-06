import { useGSAP } from '@gsap/react';
import styles from './gmail.module.scss';
import gsap from 'gsap';
import { MailPreview } from '../components/mailPreview';
import profilePicture from '../assets/images/x-profiles/brigitte.png';
import { Mail } from '../components/Mail';
import { getMails } from '../api/mails';
import { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';

export const Gmail = () => {
  const mails = useMemo(() => getMails(), []);
  const mailsArray = useMemo(() => Object.values(mails), []);
  
  const [currentMailId, setCurrentMailId] = useState(null);
  const [validatedMails, setValidatedMails] = useState([]);

  const unTreatedMails = useMemo(() => mailsArray.filter((mail) => !validatedMails.some((validatedMail) => validatedMail.id === mail.id)), [mailsArray,  validatedMails]);

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

  const addValidation = useCallback((validation) => {
    setValidatedMails((oldValidations) => {
      const newValue = [...oldValidations, validation];
      if (mailsArray.length == newValue.length) {
        const p = newValue.reduce((acc, v) => acc + v.points, 0);
        console.log(newValue, p);
      }
      return newValue;
    });
    
  }, []);

  return (
    <div id='gmail' className={styles.gmail}>
      <header>
        <h1>Gmail {currentMailId && ` - ${mails[currentMailId].author}`}</h1>
      </header>
      <section>
        <div>
          {unTreatedMails.length > 0 ? (
            unTreatedMails.map((e) => (
              <MailPreview
                title={e.title}
                author={e.author}
                date={e.date}
                active={e.id === currentMailId}
                key={e.id}
                onClick={() => setCurrentMailId(e.id)}
                isDone={validatedMails.some(({ id }) => id === e.id)}
              >
                {e.body}
              </MailPreview>
            ))
          ) : (
            <div className={styles.emptyArray}>
              <span className='material-symbols-outlined'>info</span>
              <p>Aucun mail pour le moment</p>
            </div>
          )}
        </div>
        {currentMailId != null ? (
          <Mail
            mail={mails[currentMailId]}
            profilePicture={profilePicture}
            onValidate={addValidation}
            setCurrentMailId={setCurrentMailId}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: mails[currentMailId].body.replace(/\n/g, '<br />'),
              }}
            />
          </Mail>
        ) : (
          <div className={styles.emptyMail}>
            <span className='material-symbols-outlined'>info</span>
            <p>Aucun mail sélectionné</p>
          </div>
        )}
      </section>
    </div>
  );
};
