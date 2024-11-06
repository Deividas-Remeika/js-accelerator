import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const AuthContainer = () => {
  return (
    <>
      <Navbar />
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default AuthContainer;
