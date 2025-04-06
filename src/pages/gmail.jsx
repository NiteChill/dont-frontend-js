import { useGSAP } from "@gsap/react";
import styles from "./gmail.module.scss";
import gsap from "gsap";
import { MailPreview } from "../components/mailPreview";
import profilePicture from "../assets/images/x-profiles/brigitte.png";
import { Mail } from "../components/Mail";
import { getMails } from "../api/mails";
import { useMemo, useState } from "react";
import { useCallback } from "react";

export const Gmail = () => {
  const mails = useMemo(() => getMails(), []);
  const mailsArray = useMemo(() => Object.values(mails), []);

  function deleteCurrentMail() {
    mailsArray.splice(currentMailId, 1);
  }

  const [currentMailId, setCurrentMailId] = useState(null);
  const [validatedMails, setValidatedMails] = useState([]);
  // Faire quelque chose avec les validations quand tous les mails sont traités

  useGSAP(() => {
    gsap.from("#gmail", {
      translateY: 72,
      translateX: -32,
      scale: "0",
      // opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    });
  });

  const addValidation = useCallback((validation) => {
    setValidatedMails((oldValidations) => [...oldValidations, validation]);
  }, []);

  return (
    <div id='gmail' className={styles.gmail}>
      <header>
        <h1>Gmail</h1>
      </header>
      <section>
        <div>
          {mailsArray.map((e) => (
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
          ))}
        </div>
        {currentMailId != null ? (
          <Mail
            mail={mails[currentMailId]}
            profilePicture={profilePicture}
            onValidate={addValidation}
            setCurrentMailId={setCurrentMailId}
            deleteCurrentMail={deleteCurrentMail}
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
