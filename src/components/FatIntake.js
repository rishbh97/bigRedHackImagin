import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

const FatIntake = (props) => {
  return (
    <div className={styles.item}>
      <h2>See how You can make a difference</h2>
      <FontAwesomeIcon icon={faFeather} />
      <p></p>
      <p>
        Fats is needed for hormone production, cholesterol and cell membrane
        formation, protect organs, supply vitamins (A,D,E,K) and gives the main
        energy source for the body at rest.
      </p>
    </div>
  );
};

export default FatIntake;
