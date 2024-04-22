import styles from "./Score.module.css"

import Icon from "../icon/Icon"

function Score ({ crossWins, circleWins }) {
  return (
    <div className={styles.score}>
      <h4>Placar:</h4>
      <div className={styles.scoreContent}>
        <div className={styles.scoreElements}>
          <Icon iconName='x' />
          <p>{crossWins}</p>
        </div>
        <div className={styles.scoreElements}>
          <Icon iconName='circle' />
          <p>{circleWins}</p>
        </div>
      </div>
    </div>
  )
}

export default Score