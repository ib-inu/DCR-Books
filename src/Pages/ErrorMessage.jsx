import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ message = "" }) {
    console.log(message);
    return (

        <div className={styles.container}>

            <p>Error</p>
            <p>⚠️{message}</p>
        </div>
    );
}

// Define propTypes
ErrorMessage.propTypes = {
    message: PropTypes.string,
};



export default ErrorMessage;
