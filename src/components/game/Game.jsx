import { useState, useEffect } from "react"
import styles from "./Game.module.css"

import GameOption from "../gameOption/GameOption"
import React from "react"

const winnerTable = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(0)

  const handleClick = (pos) => {
    if (gameState[pos] === 0 && winner === 0) {
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum === -3) setWinner(sum / 3)
    })
  }

  // useEffect: primeiro parâmetro é uma função, segundo é um array
  // o array são as coisas que serão modificadas, se algo é modificado, a função é chamada
  // se o array tiver vazio, ele chama sempre que o DOM é "montado" (mas não o VDOM)
  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])

  return (
    <div className={styles.gameArea}>
      <div className={styles.game}>
        {
          gameState.map((value, pos) => 
            <GameOption 
              key={`game-option-pos-${pos}`}
              status={value}
              onClick={() => handleClick(pos)}
            />
          )
        }
      </div>
      <div className={styles.menu}>
        <p>Jogador atual:</p>
        <GameOption 
          key={'player'}
          status={currentPlayer}
        />
      </div>
    </div>
  )
}

export default Game