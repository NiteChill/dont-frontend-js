import styles from "./badges.module.scss";

import hunterBadge from "../../assets/images/icons/hunter.svg";
import lightBadge from "../../assets/images/icons/lightbulb.svg";
import decodeBadge from "../../assets/images/icons/magnifier.svg";
import guardianBadge from "../../assets/images/icons/shield.svg";
import { FiveStar } from "./fiveStar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Badges = ({ numberOfStars }) => {
  useGSAP(() => {
    gsap.from("#badge", {
      top:
        -document.querySelector("#badge").getBoundingClientRect().height - 32,
      duration: 0.4,
      ease: "power1.inOut",
    });
  });
  return (
    <div className={styles.wrapper} id="badge">
      <img src={guardianBadge} alt="Guardian Badge" className={styles.img} />
      <div className={styles.textNStars}>
        <p className={styles.text}>Gardien de la boîte mail</p>
        {/* <FiveStar rate={[1, 1, 1, 0.5, 0]} className={styles.stars}></FiveStar> */}
        <div className={styles.stars}>
          <span class="material-symbols-outlined filled">star</span>
          <span class="material-symbols-outlined filled">star</span>
          <span class="material-symbols-outlined filled">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
        </div>
      </div>
    </div>
  );
};
