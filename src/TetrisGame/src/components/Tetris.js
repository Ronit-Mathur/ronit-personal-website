import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus'

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 }))
      updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000)
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player clears 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // And increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      console.log("Drop collision test passed -- Updating... ");
      updatePlayerPos({ x: 0, y: 1, collided: false });
      console.log("Player position updated");
    } else {
      console.log("Drop Collision Test Failed");
      if (player.pos.y < 1) {
        console.log("GAME OVER!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };


  const keyUp = ({ keycode }) => {
    if (!gameOver) {
      if (keycode === 40) {
        // 40 = downArrow
        setDropTime((1000 / (level + 1) + 200));
      }
    }
  }

  const dropPlayer = () => {
    // TODO setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // 37 = leftArrow
        movePlayer(-1); // Left
      } else if (keyCode === 39) {
        // 39 = rightArrow
        movePlayer(1);
      } else if (keyCode === 40) {
        // 40 = downArrow
        dropPlayer();
      } else if (keyCode === 38) {
        // 38 = upArrow
        playerRotate(stage, 1); // Clockwise rotation
        //TODO Add key for counterclockwise rotation?
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e)  => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`}/>
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
