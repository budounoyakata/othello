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
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === turnColor) ||
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === 3 - turnColor &&
        y - 3 >= 0 &&
        board[y - 3][x] === turnColor) ||
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === 3 - turnColor &&
        y - 3 >= 0 &&
        board[y - 3][x] === 3 - turnColor &&
        y - 4 >= 0 &&
        board[y - 4][x] === turnColor) ||
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === 3 - turnColor &&
        y - 3 >= 0 &&
        board[y - 3][x] === 3 - turnColor &&
        y - 4 >= 0 &&
        board[y - 4][x] === 3 - turnColor &&
        y - 5 >= 0 &&
        board[y - 5][x] === turnColor) ||
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === 3 - turnColor &&
        y - 3 >= 0 &&
        board[y - 3][x] === 3 - turnColor &&
        y - 4 >= 0 &&
        board[y - 4][x] === 3 - turnColor &&
        y - 5 >= 0 &&
        board[y - 5][x] === 3 - turnColor &&
        y - 6 >= 0 &&
        board[y - 6][x] === turnColor) ||
      (y - 1 >= 0 &&
        board[y - 1][x] === 3 - turnColor &&
        y - 2 >= 0 &&
        board[y - 2][x] === 3 - turnColor &&
        y - 3 >= 0 &&
        board[y - 3][x] === 3 - turnColor &&
        y - 4 >= 0 &&
        board[y - 4][x] === 3 - turnColor &&
        y - 5 >= 0 &&
        board[y - 5][x] === 3 - turnColor &&
        y - 6 >= 0 &&
        board[y - 6][x] === 3 - turnColor &&
        y - 7 >= 0 &&
        board[y - 7][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === 3 - turnColor &&
        y + 3 < 8 &&
        board[y + 3][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === 3 - turnColor &&
        y + 3 < 8 &&
        board[y + 3][x] === 3 - turnColor &&
        y + 4 < 8 &&
        board[y + 4][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === 3 - turnColor &&
        y + 3 < 8 &&
        board[y + 3][x] === 3 - turnColor &&
        y + 4 < 8 &&
        board[y + 4][x] === 3 - turnColor &&
        y + 5 < 8 &&
        board[y + 5][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === 3 - turnColor &&
        y + 3 < 8 &&
        board[y + 3][x] === 3 - turnColor &&
        y + 4 < 8 &&
        board[y + 4][x] === 3 - turnColor &&
        y + 5 < 8 &&
        board[y + 5][x] === 3 - turnColor &&
        y + 6 < 8 &&
        board[y + 6][x] === turnColor) ||
      (y + 1 < 8 &&
        board[y + 1][x] === 3 - turnColor &&
        y + 2 < 8 &&
        board[y + 2][x] === 3 - turnColor &&
        y + 3 < 8 &&
        board[y + 3][x] === 3 - turnColor &&
        y + 4 < 8 &&
        board[y + 4][x] === 3 - turnColor &&
        y + 5 < 8 &&
        board[y + 5][x] === 3 - turnColor &&
        y + 6 < 8 &&
        board[y + 6][x] === 3 - turnColor &&
        y + 7 < 8 &&
        board[y + 7][x] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === 3 - turnColor &&
        x - 3 >= 0 &&
        board[y][x - 3] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === 3 - turnColor &&
        x - 3 >= 0 &&
        board[y][x - 3] === 3 - turnColor &&
        x - 4 >= 0 &&
        board[y][x - 4] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === 3 - turnColor &&
        x - 3 >= 0 &&
        board[y][x - 3] === 3 - turnColor &&
        x - 4 >= 0 &&
        board[y][x - 4] === 3 - turnColor &&
        x - 5 >= 0 &&
        board[y][x - 5] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === 3 - turnColor &&
        x - 3 >= 0 &&
        board[y][x - 3] === 3 - turnColor &&
        x - 4 >= 0 &&
        board[y][x - 4] === 3 - turnColor &&
        x - 5 >= 0 &&
        board[y][x - 5] === 3 - turnColor &&
        x - 6 >= 0 &&
        board[y][x - 6] === turnColor) ||
      (x - 1 >= 0 &&
        board[y][x - 1] === 3 - turnColor &&
        x - 2 >= 0 &&
        board[y][x - 2] === 3 - turnColor &&
        x - 3 >= 0 &&
        board[y][x - 3] === 3 - turnColor &&
        x - 4 >= 0 &&
        board[y][x - 4] === 3 - turnColor &&
        x - 5 >= 0 &&
        board[y][x - 5] === 3 - turnColor &&
        x - 6 >= 0 &&
        board[y][x - 6] === 3 - turnColor &&
        x - 7 >= 0 &&
        board[y][x - 7] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === 3 - turnColor &&
        x + 3 < 8 &&
        board[y][x + 3] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === 3 - turnColor &&
        x + 3 < 8 &&
        board[y][x + 3] === 3 - turnColor &&
        x + 4 < 8 &&
        board[y][x + 4] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === 3 - turnColor &&
        x + 3 < 8 &&
        board[y][x + 3] === 3 - turnColor &&
        x + 4 < 8 &&
        board[y][x + 4] === 3 - turnColor &&
        x + 5 < 8 &&
        board[y][x + 5] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === 3 - turnColor &&
        x + 3 < 8 &&
        board[y][x + 3] === 3 - turnColor &&
        x + 4 < 8 &&
        board[y][x + 4] === 3 - turnColor &&
        x + 5 < 8 &&
        board[y][x + 5] === 3 - turnColor &&
        x + 6 < 8 &&
        board[y][x + 6] === turnColor) ||
      (x + 1 < 8 &&
        board[y][x + 1] === 3 - turnColor &&
        x + 2 < 8 &&
        board[y][x + 2] === 3 - turnColor &&
        x + 3 < 8 &&
        board[y][x + 3] === 3 - turnColor &&
        x + 4 < 8 &&
        board[y][x + 4] === 3 - turnColor &&
        x + 5 < 8 &&
        board[y][x + 5] === 3 - turnColor &&
        x + 6 < 8 &&
        board[y][x + 6] === 3 - turnColor &&
        x + 7 < 8 &&
        board[y][x + 7] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x + 3 < 8 &&
        board[y + 3][x + 3] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x + 3 < 8 &&
        board[y + 3][x + 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x + 4 < 8 &&
        board[y + 4][x + 4] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x + 3 < 8 &&
        board[y + 3][x + 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x + 4 < 8 &&
        board[y + 4][x + 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x + 5 < 8 &&
        board[y + 5][x + 5] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x + 3 < 8 &&
        board[y + 3][x + 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x + 4 < 8 &&
        board[y + 4][x + 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x + 5 < 8 &&
        board[y + 5][x + 5] === 3 - turnColor &&
        y + 6 < 8 &&
        x + 6 < 8 &&
        board[y + 6][x + 6] === turnColor) ||
      (y + 1 < 8 &&
        x + 1 < 8 &&
        board[y + 1][x + 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x + 2 < 8 &&
        board[y + 2][x + 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x + 3 < 8 &&
        board[y + 3][x + 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x + 4 < 8 &&
        board[y + 4][x + 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x + 5 < 8 &&
        board[y + 5][x + 5] === 3 - turnColor &&
        y + 6 < 8 &&
        x + 6 < 8 &&
        board[y + 6][x + 6] === 3 - turnColor &&
        y + 7 < 8 &&
        x + 7 < 8 &&
        board[y + 7][x + 7] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x - 3 >= 0 &&
        board[y + 3][x - 3] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x - 3 >= 0 &&
        board[y + 3][x - 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x - 4 >= 0 &&
        board[y + 4][x - 4] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x - 3 >= 0 &&
        board[y + 3][x - 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x - 4 >= 0 &&
        board[y + 4][x - 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x - 5 >= 0 &&
        board[y + 5][x - 5] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x - 3 >= 0 &&
        board[y + 3][x - 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x - 4 >= 0 &&
        board[y + 4][x - 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x - 5 >= 0 &&
        board[y + 5][x - 5] === 3 - turnColor &&
        y + 6 < 8 &&
        x - 6 >= 0 &&
        board[y + 6][x - 6] === turnColor) ||
      (y + 1 < 8 &&
        x - 1 >= 0 &&
        board[y + 1][x - 1] === 3 - turnColor &&
        y + 2 < 8 &&
        x - 2 >= 0 &&
        board[y + 2][x - 2] === 3 - turnColor &&
        y + 3 < 8 &&
        x - 3 >= 0 &&
        board[y + 3][x - 3] === 3 - turnColor &&
        y + 4 < 8 &&
        x - 4 >= 0 &&
        board[y + 4][x - 4] === 3 - turnColor &&
        y + 5 < 8 &&
        x - 5 >= 0 &&
        board[y + 5][x - 5] === 3 - turnColor &&
        y + 6 < 8 &&
        x - 6 >= 0 &&
        board[y + 6][x - 6] === 3 - turnColor &&
        y + 7 < 8 &&
        x - 7 >= 0 &&
        board[y + 7][x - 7] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x + 3 < 8 &&
        board[y - 3][x + 3] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x + 3 < 8 &&
        board[y - 3][x + 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x + 4 < 8 &&
        board[y - 4][x + 4] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x + 3 < 8 &&
        board[y - 3][x + 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x + 4 < 8 &&
        board[y - 4][x + 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x + 5 < 8 &&
        board[y - 5][x + 5] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x + 3 < 8 &&
        board[y - 3][x + 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x + 4 < 8 &&
        board[y - 4][x + 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x + 5 < 8 &&
        board[y - 5][x + 5] === 3 - turnColor &&
        y - 6 >= 0 &&
        x + 6 < 8 &&
        board[y - 6][x + 6] === turnColor) ||
      (y - 1 >= 0 &&
        x + 1 < 8 &&
        board[y - 1][x + 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x + 2 < 8 &&
        board[y - 2][x + 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x + 3 < 8 &&
        board[y - 3][x + 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x + 4 < 8 &&
        board[y - 4][x + 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x + 5 < 8 &&
        board[y - 5][x + 5] === 3 - turnColor &&
        y - 6 >= 0 &&
        x + 6 < 8 &&
        board[y - 6][x + 6] === 3 - turnColor &&
        y - 7 >= 0 &&
        x + 7 < 8 &&
        board[y - 7][x + 7] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x - 3 >= 0 &&
        board[y - 3][x - 3] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x - 3 >= 0 &&
        board[y - 3][x - 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x - 4 >= 0 &&
        board[y - 4][x - 4] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x - 3 >= 0 &&
        board[y - 3][x - 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x - 4 >= 0 &&
        board[y - 4][x - 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x - 5 >= 0 &&
        board[y - 5][x - 5] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x - 3 >= 0 &&
        board[y - 3][x - 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x - 4 >= 0 &&
        board[y - 4][x - 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x - 5 >= 0 &&
        board[y - 5][x - 5] === 3 - turnColor &&
        y - 6 >= 0 &&
        x - 6 >= 0 &&
        board[y - 6][x - 6] === turnColor) ||
      (y - 1 >= 0 &&
        x - 1 >= 0 &&
        board[y - 1][x - 1] === 3 - turnColor &&
        y - 2 >= 0 &&
        x - 2 >= 0 &&
        board[y - 2][x - 2] === 3 - turnColor &&
        y - 3 >= 0 &&
        x - 3 >= 0 &&
        board[y - 3][x - 3] === 3 - turnColor &&
        y - 4 >= 0 &&
        x - 4 >= 0 &&
        board[y - 4][x - 4] === 3 - turnColor &&
        y - 5 >= 0 &&
        x - 5 >= 0 &&
        board[y - 5][x - 5] === 3 - turnColor &&
        y - 6 >= 0 &&
        x - 6 >= 0 &&
        board[y - 6][x - 6] === 3 - turnColor &&
        y - 7 >= 0 &&
        x - 7 >= 0 &&
        board[y - 7][x - 7] === turnColor)
    ) {
      newBoard[y][x] = turnColor;
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
