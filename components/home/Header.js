import React from "react";
import styles from "../../styles/Home.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="https://cdn.discordapp.com/attachments/882894510395379712/941617188077461564/image.jpg"
          alt="logo"
        />
        <span className={styles.logoText}>Dislove™</span>
      </div>
      <div className={styles.headerRight}>
        <button
          className={styles.dashbutton}
          onClick={() => (window.location = "https://discord.gg/B8rK2aSwFe")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Header;
