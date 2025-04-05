import styles from "./Mail.module.scss"
import Button from "./Button"

export const Mail = ({author, title, profilePicture, date, mail, children}) => {
    return(
        <article className={styles.mail}>
          <header>
            <h2>{title}</h2>
            <span className="material-symbols-outlined">star</span>
          </header>
          <main>
            <img
              src={profilePicture}
              alt="Profile Picture"
            />
            <div className={styles.content}>
              <header>
                <div>
                  <h3>{author}</h3>
                  <p>{date}</p>
                </div>
                <p>{mail}</p>
              </header>
              <div>
                {children}
              </div>
            </div>
          </main>
          <footer>
            <Button icon="check">Marquer comme lu</Button>
            <Button filled icon="flag">Signaler</Button>
          </footer>
        </article>
    )
}