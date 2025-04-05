import styles from "./xTweet.module.scss";
import { XTweetsAllButtons } from "./xTweetsAllButtons";

export const XTweet = ({
  profile_picture,
  profile_name,
  time_since,
  children,
  src,
  alt,
}) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={profile_picture}
        alt="Profile Picture"
        className={styles.profilePicture}
      />
      <div className={styles.textWrapper}>
        <div className={styles.textWrapperContent}>
          <div className={styles.topText}>
            <p className={styles.profileName}>{profile_name}</p>
            <p className={styles.timeSince}>{time_since}</p>
          </div>
          <p className={styles.coreText}>{children}</p>
        </div>

        {src && <img src={src} alt={alt} />}
        <XTweetsAllButtons
          numbers={[22, 24, 22]}
          className={styles.XTweetsAllButtons}
        />
      </div>
    </div>
  );
};
