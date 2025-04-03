import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from 'react';
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    Y: 'Player 2'
  });

  const [gameTurns, setGameTurns] = useState([]);

  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = [...initialGameBoard.map(array => [...array])]

    for(const turn of gameTurns){
        const {square,player} = turn;
        const{row, col} = square;
        gameBoard[row][col] = player;
    }
  
    let winner = null;

  for(const comb of WINNING_COMBINATIONS){
    const first = gameBoard[comb[0].row] [comb[0].column];
    const second = gameBoard[comb[1].row] [comb[1].column];
    const third = gameBoard[comb[2].row] [comb[2].column];

    if(first && first === second && first === third){
      winner = players[first];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex,colIndex){
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square: {row:rowIndex, col:colIndex}, player:currentPlayer},...prevTurns];
      return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
      return{
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }
  
  return (
    <main>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <Player playername={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player playername={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart = {handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
