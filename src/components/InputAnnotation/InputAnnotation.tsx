import {FC} from 'react';
import styles from './InputAnnotation.module.scss';

interface InputAnnotationProps {
    text: string;
    type?: 'error' | 'info' | 'success';
}

const InputAnnotation: FC<InputAnnotationProps> = ({ text, type }) => {
    const className = `${styles.inputAnnotation} ${type === 'error' && styles.inputAnnotationError}`;
    return (
        <div className={className}>
            {text}
        </div>
    );
}

export default InputAnnotation;
