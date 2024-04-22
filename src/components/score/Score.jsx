import styles from "./Score.module.css"

import Icon from "../icon/Icon"

function Score () {
  return (
    <div className={styles.score}>
      <h4>Placar:</h4>
      <div className={styles.scoreContent}>
        <div className={styles.scoreElements}>
          <Icon iconName='X' />
          <p>0</p>
        </div>
        <div className={styles.scoreElements}>
          <Icon iconName='circle' />
          <p>0</p>
        </div>
      </div>
    </div>
  )
}

export default Score