import styles from "./Mail.module.scss";
import Button from "./Button";
import {
  useFloating,
  useInteractions,
  useDismiss,
  autoUpdate,
  offset,
  shift,
  FloatingPortal
} from "@floating-ui/react";

import { useState } from 'react';
import { ErrorPopup } from "./errorPopup";
import { useCallback } from "react";

export const Mail = ({
  mail,
  profilePicture,
  onValidate,
  children,
  setCurrentMailId,
  deleteCurrentMail,
}) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isReportOpen,
    onOpenChange: setIsReportOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(20), shift()],
  });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const markAsRead = useCallback(() => {
    onValidate({ id: mail.id, points: !mail.errors?.length ? 100 : 0 });
    deleteCurrentMail();
    setCurrentMailId(null);
  }, []);

  const reportMail = useCallback(
    (selectedErrorKeys) => {
      if (!mail.errors?.length) {
        onValidate({ id: mail.id, points: 0 });
      }

      if (mail.errors) {
        const includedErrors = selectedErrorKeys.filter((key) =>
          mail.errors.includes(key)
        );
        const excludedErrors = selectedErrorKeys.filter(
          (key) => !mail.errors.includes(key)
        );
        const points = includedErrors.length * 100 - excludedErrors.length * 20;
        onValidate({ id: mail.id, points: Math.max(0, points) });
      }
      setIsReportOpen(false);
    },
    [mail]
  );

  return (
    <>
      <article className={styles.mail}>
        <header>
          <h2>{mail.title}</h2>
          <span className='material-symbols-outlined'>star</span>
        </header>
        <main>
          <img src={profilePicture} alt='Profile Picture' />
          <div className={styles.content}>
            <header>
              <div>
                <h3>{mail.author}</h3>
                <p>{mail.date}</p>
              </div>
              <p>{mail.email}</p>
            </header>
            <div>{children}</div>
          </div>
        </main>
        <footer>
          <Button icon='check' onClick={markAsRead}>
            Marquer comme lu
          </Button>
          <Button
            ref={refs.setReference}
            {...getReferenceProps()}
            onClick={() => setIsReportOpen((v) => !v)}
            filled
            icon='flag'
          >
            Signaler
          </Button>
        </footer>
      </article>
      {isReportOpen && (
        <FloatingPortal>
          <ErrorPopup
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            onSubmit={reportMail}
          />
        </FloatingPortal>
      )}
    </>
  );
};