import styles from "./GameInfo.module.css"
import GameOption from "../gameOption/GameOption"
import Button from "../button/Button"

function GameInfo ({ currentPlayer, winner, onReset, isDraw }) {
  return (
    <div className={styles.menu}>
      {
        winner === 0 && isDraw === false &&
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
      {
        isDraw === true &&
          <>
            <p>Empate!</p>
            
          </>
      }
      <Button
        onClick={onReset}
        disabled={winner === 0 && isDraw === false}
      >
        Jogar novamente
      </Button>
    </div>
  )
}

export default GameInfo