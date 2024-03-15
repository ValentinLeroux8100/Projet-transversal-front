import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.logo}>Airneis</div>
      <ul className={styles.links}>
        <li>
          <a href="">Mentions legales</a>
        </li>
        <li>
          <a href="">GCU</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Réseaux sociaux</a>
        </li>
      </ul>
    </footer>
  );
}
