import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import CustomButton from "../shared/Button";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import UserAvatar from "../shared/Avatar";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const links = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About Us",
    },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <UserAvatar>{user.email[0]}</UserAvatar>
        ) : (
          <CustomButton onClick={() => navigate(ROUTES.LOGIN)} large>
            Login / Sign Up
          </CustomButton>
        )}
      </div>
    </header>
  );
};

export default Navbar;
