import styles from './mailPreview.module.scss';
import classNames from 'classnames';

export const MailPreview = ({ children, title, author, date, onClick, active }) => {
  return (
    <div className={classNames(styles.mailPreview, {[styles.active]:active})} onClick={onClick}>
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
