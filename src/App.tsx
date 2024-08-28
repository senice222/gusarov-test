import './App.scss'
import {ChangeEvent, useState} from "react";
import InputAnnotation from "./components/InputAnnotation/InputAnnotation.tsx";
import InputText from "./components/InputText/InputText.tsx";
import InputLabel from "./components/InputLabel/InputLabel.tsx";
import InputGroup from "./components/InputGroup/InputGroup.tsx";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsTouched(true);
    };

    return (
        <InputGroup
            label={<InputLabel htmlFor="email-input" text="Email" />}
            input={
                <InputText
                    id="email-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter text..."
                    ariaLabel="Example input field"
                    status={isTouched && inputValue.length === 0 ? 'error' : 'default'}
                />
            }
            annotation={
                isTouched && inputValue.length === 0 && (
                    <InputAnnotation text="This field is required" type="error" />
                )
            }
        />
    );
}

export default App
