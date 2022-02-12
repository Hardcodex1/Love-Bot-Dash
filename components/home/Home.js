import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import CountUp from "react-countup";
import io from "socket.io-client";
let socket;
import { motion } from "framer-motion";
import TypeAnimation from "react-type-animation";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    if (data.guilds) return;
    socket = io.connect("https://bot-server-real.uselessman1.repl.co");
    socket.emit("webData");
    socket.on("webData", async (data) => {
      setData(data);
    });
  }, [socket]);

  const typeComponent = (text, classNameis) => {
    return (
      <TypeAnimation
        cursor={false}
        sequence={[text, 1000, text]}
        repeat={10}
        wrapper="h2"
        className={classNameis}
      />
    );
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHero}>
        <div className={styles.heroLeft}>
          {typeComponent("Dis", styles.heroLeftText)}
          {typeComponent("Find Your", styles.heroLeftDesc)}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button1}
            onClick={() => (window.location = "https://discord.gg/B8rK2aSwFe")}
          >
            Support Server
          </motion.button>
        </div>
        <div className={styles.heroRight}>
          {typeComponent("love™", styles.heroRightText)}
          {typeComponent("True Love", styles.heroRightDesc)}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button2}
            onClick={() =>
              (window.location =
                "https://discord.com/api/oauth2/authorize?client_id=931562277717544960&permissions=380172101696&scope=bot%20applications.commands")
            }
          >
            Invite
          </motion.button>
        </div>
      </div>
      <div className={styles.counterContainer}>
        <div className={styles.serverCounter}>
          <span className={styles.counterTitle}>Servers</span>
          <CountUp end={data?.guilds} className={styles.counterValue} />
        </div>
        <div className={styles.serverCounter}>
          <span className={styles.counterTitle}>Users</span>
          <CountUp end={data?.users} className={styles.counterValue} />
        </div>
        <div className={styles.serverCounter}>
          <span className={styles.counterTitle}>Matches</span>
          <CountUp end={data?.matches} className={styles.counterValue} />
        </div>
      </div>
    </div>
  );
}

export default Home;
