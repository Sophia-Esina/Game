import { useState } from 'react';
import '../index.css';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;

		const winner = checkWinner(newField);
		if (winner) {
			setIsGameEnded(true);
			alert(`Победа: ${winner}`);
		} else if (newField.every((cell) => cell !== '')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'О' : 'X');
		}

		setField(newField);
	};

	const checkWinner = (field) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<div className={'game'}>
			<GameLayout
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				field={field}
				onCellClick={handleCellClick}
				resetGame={resetGame}
			/>
		</div>
	);
}
