"use client";

import styles from "@/styles/badge/badge.module.scss";
import Image from "next/image";
import type IBadge from "@/interfaces/Ibadge";
import { useEffect, useState } from "react";

const Badge = (props: IBadge) => {
    const [isHidden, setHidden] = useState(false);

    // useEffect(() => {
    //     return () => {
    //         console.log(123);
    //     };
    // }, [isHidden]);

    return (
        <div
            className={styles.container}
            style={isHidden ? { visibility: "hidden" } : {}}
        >
            <header>
                <div className={styles.line} />
                <div className={styles.options_container}>
                    <Image
                        src="/images/minus.png"
                        width={15}
                        height={15}
                        alt="hide button"
                        onClick={() => setHidden(true)}
                    />
                    <Image
                        src="/images/close.svg"
                        width={15}
                        height={15}
                        alt="close button"
                        onClick={() => setHidden(true)}
                    />
                </div>
            </header>
            {props.children}
        </div>
    );
};

export default Badge;
