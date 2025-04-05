import styles from './messageChoice.module.scss';

export const MessageChoice = ({ choice, onMessageChosen }) => {
    return <div className={styles.choiceMessage} onClick={() => onMessageChosen(choice)}>{choice.message}</div>
};