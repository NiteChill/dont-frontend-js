import styles from './result.module.scss';

export const Result = ({ result, onShowAdvice, currentAdviceIdx }) => {
    return (
        <div className={styles.wrapper}>
            <h3>{result.success ? 'Bravo !' : 'Pas de chance ! 😢'}</h3>
            <h4>{result.success ? 'Vous ne vous êtes pas laissé avoir. 👍' : 'Vous avez été victime d\'une arnaque.'}</h4>
            <p>{result.success ? 'Cependant, votre interlocuteur pourrait être plus malin la prochaine fois' : 'Vous pouvez cependant vous en prémunir'}</p>
            <button className={styles.adviceBtn} onClick={onShowAdvice}>{currentAdviceIdx < 0 ? 'Voir les conseils' : 'Conseil suivant'}</button>
        </div>
    );
};