import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import TextInput from "@/components/shared/Input";
import CustomButton from "@/components/shared/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/consts";
import styles from "./Register.module.scss";

const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    register({ email, password });
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          className={styles.input}
        />
        <CustomButton type="submit">Register</CustomButton>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.signIn}>
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
