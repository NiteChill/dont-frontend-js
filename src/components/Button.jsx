import { forwardRef } from "react";
import styles from "./Button.module.scss";

import cn from 'classnames';

const Button = forwardRef(({ children, icon, filled, onClick, className, ...rest }, ref) =>  {
    return (
        <button ref={ref} type="button" className={cn(styles.button, { [styles.filled]: filled }, className)} onClick={onClick} {...rest}>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            <p>{children}</p>
        </button>
    )
});

export default Button;