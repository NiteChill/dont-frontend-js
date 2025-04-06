import { useState } from "react";
import styles from "./xTweetsButton.module.scss";

export const XTweetsButton = ({ icon, fillable, alt, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      className={`${styles.button} ${children && styles.buttonWithChildren}`}
      onClick={() => setToggle(!toggle)}
    >
      <div>
        <span className={`material-symbols-outlined ${(toggle && fillable) && "filled"}`}>{icon}</span>
      </div>
      {children && <p>{children}</p>}
    </button>
  );
};
