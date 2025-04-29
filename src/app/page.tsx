'use client';

import { useState } from 'react';
import styles from './page.module.css';
export const direction = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];
export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHander = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    if (
      (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) ||
      (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor) ||
      (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) ||
      (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor)
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    } else print();
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div key={`${x}-${y}`} onClick={() => clickHander(x, y)} className={styles.cell}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
