"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/badge/main-badge-header.module.scss";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ minWidth: "10rem" }}>
            <p className={styles.time_text_secondary} suppressHydrationWarning>
                {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
            </p>
            <p>
                {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
            </p>
        </div>
    );
};

export default Clock;
