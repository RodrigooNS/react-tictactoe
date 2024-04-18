import styles from "./GameInfo.module.css"
import GameOption from "../gameOption/GameOption"
import Button from "../button/Button"

function GameInfo ({ currentPlayer, winner, onReset }) {
  return (
    <div className={styles.menu}>
      {
        winner === 0 &&
          <>
            <p>Jogador atual:</p>
            <GameOption 
              key={'player'}
              status={currentPlayer}
            />
          </>
      }
      {
        winner !== 0 &&
          <>
            <p>Fim de jogo! Campeão:</p>
            <GameOption 
              key={'winner'}
              status={winner}
            />
          </>
      }
      <Button
        onClick={onReset}
        disabled={winner === 0}
      >
        Jogar novamente
      </Button>
    </div>
  )
}

export default GameInfo