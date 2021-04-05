const I_COLOR = "80, 227, 230";
const J_COLOR = "36, 95, 223";
const L_COLOR = "223, 173, 36";
const O_COLOR = "223, 217, 36";
const S_COLOR = "48, 211, 56";
const T_COLOR = "132, 61, 198";
const Z_COLOR = "227, 78, 78";

export const TETROMINOS = {
  0: { shape: [], color: "0, 0, 0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: I_COLOR,
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: J_COLOR,
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: L_COLOR,
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: O_COLOR,
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: S_COLOR,
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, "T", 0],
    ],
    color: T_COLOR,
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: Z_COLOR,
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
