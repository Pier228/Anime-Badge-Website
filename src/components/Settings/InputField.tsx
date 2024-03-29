"use client";
import type IInputField from "@/interfaces/IInputField";
import styles from "@/styles/buttons/input-button.module.scss";
import { useEffect, useState } from "react";

const InputField = (props: IInputField) => {
    const [text, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            ref={props.inputRef}
            type="text"
            className={styles.input}
            value={text}
            maxLength={props.maxLength}
            onChange={changeValue}
            placeholder={props.placeholder}
        />
    );
};

export default InputField;
