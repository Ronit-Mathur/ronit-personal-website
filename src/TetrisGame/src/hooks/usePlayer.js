import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    // Make Rows -> Cols (Transpose)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );

    // Reverse each row for rotated matrix
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  // Confusing rotation methods
  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player)); // Complete copy of player - avoids mutating state
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1)); // Moves tetromino back and forth, incremented each time, to see when it collides
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir); // Rotate back if collision detected on rotate
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev, // Spread previous state
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
