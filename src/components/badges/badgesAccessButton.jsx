import badgeIcon from "../assets/images/icons/badgeIcon.svg";

export const BadgesAccessButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={badgeIcon} alt="Badges" />
    </button>
  );
};
