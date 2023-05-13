import styles from "./index.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Find Job",
      link: "findJob",
    },
    {
      name: "Post Job",
      link: "/postjob",
    },
  ];

  useEffect(() => {
    const scrollCheck = () =>
      setIsScrolled(window.scrollY >= 10 ? true : false);
    window.addEventListener("scroll", scrollCheck);
    return () => window.removeEventListener("scroll", scrollCheck);
  }, []);

  return (
    <div className={isScrolled ? styles.isScrolled : ""}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo_section}>
            <img src={"/favicon.ico"} alt="logo icon" />
            Anshu saini
          </div>
          <div className={styles.nav_items}>
            {navItems.map((item, i) => (
              <Link key={`nav-itmes${i}`} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className={styles.auth_section}>
            <Button variant="outline-primary">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
