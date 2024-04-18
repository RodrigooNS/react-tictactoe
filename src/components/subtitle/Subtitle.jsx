import styles from "./Subtitle.module.css"

function Subtitle ({ children }) {
  return (
    <h4 className={styles.subtitle}>{children}</h4>
  )
}

export default Subtitle