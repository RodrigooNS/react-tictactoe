import styles from "./Header.module.css"

import Subtitle from "../subtitle/Subtitle"
import Title from "../title/Title"

function Header ({ children }) {
  return (
    // <h1 className={styles.header}>{children}</h1>
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por RodrigoNS</Subtitle>
    </div>
  )
}

export default Header