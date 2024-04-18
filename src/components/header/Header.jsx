import styles from "./Header.module.css"

import Subtitle from "../subtitle/Subtitle"
import Title from "../title/Title"
import Icon from "../icon/Icon"

function Header ({ children }) {
  return (
    // <h1 className={styles.header}>{children}</h1>
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por RodrigooNS</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/RodrigooNS" />
      </div>
    </div>
  )
}

export default Header