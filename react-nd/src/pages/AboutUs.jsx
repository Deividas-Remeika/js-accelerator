import styles from "./AboutUs.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our home services platform! We are dedicated to connecting you with the best home service providers in your area. Whether you need cleaning, shifting, electrical work, repairs, gardening, plumbing, roofing, painting, we have got you covered.
      </p>
      <h2 className={styles.subtitle}>Our Mission</h2>
      <p className={styles.text}>
        Our mission is to make it easy for you to find reliable and professional home service providers. We carefully vet each provider to ensure they meet our high standards of quality and reliability.
      </p>
      <h2 className={styles.subtitle}>Why Choose Us?</h2>
      <ul className={styles.list}>
        <li>Wide range of services</li>
        <li>Trusted and verified providers</li>
        <li>Easy booking process</li>
        <li>Competitive pricing</li>
        <li>Customer satisfaction guaranteed</li>
      </ul>
      <h2 className={styles.subtitle}>Contact Us</h2>
      <p className={styles.text}>
        If you have any questions or need assistance, feel free to contact us at support@example.com. We are here to help!
      </p>
    </div>
  );
};

export default AboutPage;