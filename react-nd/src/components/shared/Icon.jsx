import classNames from "classnames";
import styles from "./Icon.module.scss";

const Icon = ({ className, style = {}, url }) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        ...style,
      }}
    />
  );
};

export default Icon;
