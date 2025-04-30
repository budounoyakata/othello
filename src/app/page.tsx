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
  const flipStones = (x: number, y: number, newBoard: number[][]) => {
    let isValidMove = false;

    direction.forEach(([dx, dy]) => {
      let nx = x + dx;
      let ny = y + dy;
      const stonesToFlip = [];

      while (ny >= 0 && ny < 8 && nx >= 0 && nx < 8 && newBoard[ny][nx] === 3 - turnColor) {
        stonesToFlip.push([nx, ny]);
        nx += dx;
        ny += dy;
      }

      if (ny >= 0 && ny < 8 && nx >= 0 && nx < 8 && newBoard[ny][nx] === turnColor) {
        isValidMove = true;
        stonesToFlip.forEach(([fx, fy]) => {
          newBoard[fy][fx] = turnColor;
        });
      }
    });

    return isValidMove;
  };

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    if (flipStones(x, y, newBoard)) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    } else {
      console.log('ここには置けません！');
    }
    {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div key={`${x}-${y}`} onClick={() => clickHandler(x, y)} className={styles.cell}>
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
