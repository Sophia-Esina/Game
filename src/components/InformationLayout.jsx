import styles from './Information.module.css';
import PropTypes from 'prop-types';

export default function InformationLayout({ message }) {
	return (
		<div className={styles.info}>
			<h2>{message}</h2>
		</div>
	);
}
InformationLayout.propTypes = {
	message: PropTypes.string,
};
