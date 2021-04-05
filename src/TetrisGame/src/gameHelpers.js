export const STAGE_WIDTH = 16;
export const STAGE_HEIGHT = 20;

// Creates an empty Stage array to be passed to Stage.js to map onto
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check if on tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check if our move is inside the game area height (y)
          !stage[y + player.pos.y + moveY] ||
          // 3. Check if our move is inside the game area width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX]
        ) {
          console.log(
            "first check y: " +
              (y + player.pos.y + moveY) +
              " x:  " +
              (x + player.pos.x + moveX)
          );
          return true;
        } else if (
          y + player.pos.y + moveY <= STAGE_HEIGHT &&
          x + player.pos.x + moveX <= STAGE_WIDTH
        ) {
          // 4. Check the cell we are moving to isn't set to clear
          try {
            if (
              stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
              "clear"
            ) {
              console.log(
                "isnt clear check y: " +
                  (y + player.pos.y + moveY) +
                  " x:  " +
                  (x + player.pos.x + moveX)
              );
              return true;
            }
          } catch (err) {
            // Catch type error when out of boundary
            console.log(
              "caught type error check y: " +
                (y + player.pos.y + moveY) +
                " x:  " +
                (x + player.pos.x + moveX)
            );
            return true;
          }
        } else {
          console.log(
            "NOT COLLIDED check y: " +
              (y + player.pos.y + moveY) +
              " x:  " +
              (x + player.pos.x + moveX)
          );
          return false;
        }
      }
    }
  }
};
