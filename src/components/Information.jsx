import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

export default function Information({ currentPlayer, isDraw, isGameEnded }) {
	let statusMessage = 'Ходит: ' + currentPlayer;

	if (isGameEnded) {
		statusMessage = `Победа: ${currentPlayer}`;
	} else if (isDraw) {
		statusMessage = 'Ничья';
	}

	return <InformationLayout message={statusMessage} />;
}

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
