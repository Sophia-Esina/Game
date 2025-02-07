import styles from './Field.module.css';
import PropTypes from 'prop-types';

export default function FieldLayout({ field, onCellClick }) {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
