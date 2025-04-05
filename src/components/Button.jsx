import styles from "./Button.module.scss"

export default function Button({children, icon, filled})  {
    return (
        <button type="button" className={`${styles.button} ${filled && styles.filled}`}>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            <p>{children}</p>
        </button>
    )
}