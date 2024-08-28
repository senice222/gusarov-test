import {FC} from 'react';
import styles from './InputLabel.module.scss';

interface InputLabelProps {
    htmlFor: string;
    text: string;
}

const InputLabel: FC<InputLabelProps> = ({ htmlFor, text }) => {
    return (
        <label htmlFor={htmlFor} className={styles.inputLabel}>
            {text}
        </label>
    );
}

export default InputLabel;
