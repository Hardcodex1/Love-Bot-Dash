import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import TypeAnimation from "react-type-animation";

function Details() {
  const data = [
    {
      name: "image",
      title: "Epic Match System",
      desc: "Browse Through Verious Different Profiles To Find The Best Match And Swipe It.",
      img: "https://cdn.discordapp.com/attachments/882894510395379712/941978881861234749/unknown.png",
    },
    {
      name: "image2",
      title: "LoveCall",
      desc: "Call Different Intrested People Make New Friends Or Find Your Date. You Can Even Swipe The User Using Call ID!",
      img: "https://cdn.discordapp.com/attachments/882894510395379712/941979819321733120/unknown.png",
    },
    {
      name: "image2",
      title: "Real Time Notifications",
      desc: "Recieve Real Time Notifications Of Swipes And Unmatches With More To Come",
      img: "https://cdn.discordapp.com/attachments/932563564743495730/941981495562739742/unknown.png",
    },
    {
      name: "image2",
      title: "Hobbies",
      desc: "Add Your Hobbies Play Your Move. Better Matchmaking For Every Hobby",
      img: "https://cdn.discordapp.com/attachments/882894521107636254/941982506394206228/unknown.png",
    },
    {
      name: "image2",
      title: "Friends System",
      desc: "Not Intrested In Relationships? Don't worry We Got You Covered. Find A Friend, Use The Name To Call And Make A Mark",
      img: "https://cdn.discordapp.com/attachments/924662866081095702/941982998885171230/unknown.png",
    },
    {
      name: "image2",
      title: "Privacy Protection",
      desc: "Don't Like Our Bot And Want To Erase Your Data? No Worries We Got You Covered",
      img: "https://cdn.discordapp.com/attachments/924662866081095702/941983987914666014/unknown.png",
    },
  ];

  const typeComponent = (text, classNameis) => {
    return (
      <TypeAnimation
        cursor={true}
        sequence={[text, 1000, text]}
        className={classNameis}
        wrapper="span"
      />
    );
  };

  return (
    <div className={styles.detailsContainer}>
      {data.map((d, i) =>
        i % 2 !== 0 ? (
          <>
            <div className={styles.card1}>
              <div className={styles.card1Left}>
                <img className={d.name} src={d.img} alt="img" />
              </div>
              <div className={styles.card1Right}>
                <span className={styles.cardTitle}>{d.title}</span>
                {typeComponent(d.desc, styles.cardDesc)}
              </div>
            </div>
            {i != data.length - 1 ? (
              <div className={styles.cardBreak}></div>
            ) : null}
          </>
        ) : (
          <>
            <div className={styles.card2}>
              <div className={styles.card2Left}>
                <span className={styles.cardTitle}>{d.title}</span>
                {typeComponent(d.desc, styles.cardDesc)}
              </div>
              <div className={styles.card2Right}>
                <img className={d.name} src={d.img} alt="img" />
              </div>
            </div>
            {i != data.length - 1 ? (
              <div className={styles.cardBreak}></div>
            ) : null}
          </>
        )
      )}
    </div>
  );
}

export default Details;
