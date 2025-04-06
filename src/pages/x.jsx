import { useGSAP } from "@gsap/react";
import styles from "./x.module.scss";
import gsap from "gsap";

import { XTweet } from "../components/x/xTweet";

import xProfilePicture from "../assets/images/x-profiles/brigitte.png";
import xTweetPictures from "../assets/images/x-images/raidShadowLegends.png";

export const X = () => {
  useGSAP(() => {
    gsap.from("#x", {
      translateY: 72,
      translateX: 32,
      scale: "0",
      duration: 0.4,
      ease: "power1.out",
    });
  });
  return (
    <div id="x" className={styles.x}>
      <header>
        <h1>X - Feed</h1>
      </header>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <XTweet
            profile_picture={xProfilePicture}
            profile_name="Brigitte"
            time_since="35min"
            src={xTweetPictures}
            alt="Raid Shadow Legends"
          >
            Pas fifou le film Minecraft franchement....
          </XTweet>
          <XTweet
            profile_picture={xProfilePicture}
            profile_name="Jean LaSalle"
            time_since="55min"
          >
            Ouais j'ai pas kiffé Minecraft the movie, trop un film de salopette
            stv mon opinion.
          </XTweet>
        </section>
      </div>
      <footer>{/* footer */}</footer>
    </div>
  );
};
