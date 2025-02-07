import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

export default function Field({ field, onCellClick }) {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
