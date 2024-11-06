import styles from "./Avatar.module.scss";

const UserAvatar = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};

export default UserAvatar;
