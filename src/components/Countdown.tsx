import React from "react";
import { FaTimes } from "react-icons/fa";
import { useCountdown } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

const Countdown = () => {
  const {
    time,
    challengeTime,
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useCountdown();

  const [minuteLeft, minuteRight] = minutes
    .toString()
    .padStart(2, "0")
    .split("");
  const [secondLeft, secondRight] = seconds
    .toString()
    .padStart(2, "0")
    .split("");

  const timeProgressPercentage = 100 - Math.round(time * 100) / challengeTime;

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado{" "}
          <img src="icons/check_circle.svg" alt="Check Circle" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo <FaTimes style={{ marginLeft: "1rem" }} />
              <div className={styles.countdownProgressBar} />
              <div
                className={styles.countdownProgressBarTrack}
                style={{ width: `${timeProgressPercentage}%` }}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo <img src="icons/start.svg" alt="start" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
