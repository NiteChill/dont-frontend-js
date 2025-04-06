import {Star} from "./star";
import styles from './fiveStar.module.scss'

export const FiveStar = ({ rate }) => {
  return (
    <div className={styles.wrapper}>
      <Star value={rate[0]} />
      <Star value={rate[1]} />
      <Star value={rate[2]} />
      <Star value={rate[3]} />
      <Star value={rate[4]} />
    </div>
  );
};
