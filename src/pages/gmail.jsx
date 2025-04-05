import { useGSAP } from "@gsap/react";
import styles from "./gmail.module.scss";
import gsap from "gsap";
import { MailPreview } from "../components/mailPreview";
import profilePicture from "../assets/images/x-profiles/brigitte.png";
import { Mail } from "../components/Mail";
import { getMails } from "../api/getMails";
import { useMemo, useState } from "react";

export const Gmail = () => {
  const mails = useMemo(() => getMails(), []);

  const [mail, setMail] = useState(null);

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
  return (
    <div id="gmail" className={styles.gmail}>
      <header>
        <h1>Gmail</h1>
      </header>
      <section>
        <div>
          {mails.map((e, id) => (
            <MailPreview
              title={e.title}
              author={e.author}
              date={e.date}
              active={id === mail}
              onClick={() => setMail(id)}
            >
              {e.body}
            </MailPreview>
          ))}
        </div>
        {mail != null ? (
          <Mail
            title="[GitHub] Your password has changed"
            author="GitHub"
            date="5 Avril 2025, 6:45"
            mail="noreply-maps-timeline@google.com"
            profilePicture={profilePicture}
          >
            {mails[mail].body}
          </Mail>
        ) : (
          <div className={styles.emptyMail}>
            <span className="material-symbols-outlined">info</span>
            <p>Aucun mail sélectionné</p>
          </div>
        )}
      </section>
    </div>
  );
};
