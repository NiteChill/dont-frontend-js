import styles from './mailPreview.module.scss';

export const MailPreview = ({ children, title, author, date, onClick }) => {
  return (
    <div className={styles.mailPreview} onClick={onClick}>
      <div>
        <span className='material-symbols-outlined'>star</span>
        <h4>{author}</h4>
        <p>{date}</p>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};
