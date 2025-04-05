import styles from "./xTweetsAllButtons.module.scss";

import { XTweetsButton } from "./xTweetsButton";

export const XTweetsAllButtons = ({ numbers }) => {
  return (
    <div className={styles.wrapper}>
      <XTweetsButton icon="favorite" fillable={true} alt="Bookmarks">
        {numbers[0]}
      </XTweetsButton>
      <XTweetsButton icon="comment" alt="Comments">
        {numbers[1]}
      </XTweetsButton>
      <XTweetsButton icon="bookmark" fillable={true} alt="Likes">
        {numbers[2]}
      </XTweetsButton>
      <XTweetsButton icon="flag" alt="Report"></XTweetsButton>
    </div>
  );
};
