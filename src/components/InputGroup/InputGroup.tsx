import {ReactNode, FC} from 'react';
import styles from './InputGroup.module.scss';

interface InputGroupProps {
    label: ReactNode;
    input: ReactNode;
    annotation?: ReactNode;
}

const InputGroup: FC<InputGroupProps> = ({label, input, annotation}) => {
    return (
        <div className={styles.inputGroup}>
            {label}
            {input}
            {annotation && <div className={styles.inputAnnotation}>{annotation}</div>}
        </div>
    );
}

export default InputGroup;
