import Information from './Information';
import Field from './Field';
import styles from './Game.module.css';
import PropTypes from 'prop-types';

export default function GameLayout({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	onCellClick,
	resetGame,
}) {
	return (
		<div className={styles.app}>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<Field field={field} onCellClick={onCellClick} />
			<button onClick={resetGame}>Начать заново</button>
		</div>
	);
}

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
	resetGame: PropTypes.func.isRequired,
};
