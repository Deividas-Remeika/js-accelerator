import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.rootContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
