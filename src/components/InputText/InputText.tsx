import {ChangeEvent, FC} from 'react';
import styles from './InputText.module.scss';

interface InputTextProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    ariaLabel?: string;
    status: 'error' | 'default';
}

const InputText: FC<InputTextProps> = ({value, onChange, placeholder, id, ariaLabel, status}) => {
    const inputClass = styles[status];

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            aria-label={ariaLabel}
            className={`${inputClass}`}
        />
    );
}

export default InputText;
