"use client";
import styles from "@/styles/buttons/input-button.module.scss";
import { useState } from "react";

const InputField = ({ value }: { value: string }) => {
    const [text, setValue] = useState(value);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            type="text"
            className={styles.input}
            value={text}
            maxLength={15}
            onChange={changeValue}
            placeholder="Enter Nickname"
        />
    );
};

export default InputField;
