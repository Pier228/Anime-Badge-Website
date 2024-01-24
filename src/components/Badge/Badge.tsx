"use client";
import styles from "@/styles/badge/badge.module.scss";
import Image from "next/image";
import type IBadge from "@/interfaces/Ibadge";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "@/lib/reducers/badgeReducer";
import { RootState } from "@/lib/store";

const Badge = (props: IBadge) => {
    const dispatch = useDispatch();
    const isHidden = useSelector(
        (state: RootState) =>
            state.badge.find((b) => b.id === props.id)?.isHidden
    );

    const handleToggleVisibility = () => {
        dispatch(toggleVisibility(props.id));
    };

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
                        onClick={() => handleToggleVisibility()}
                    />
                    <Image
                        src="/images/close.svg"
                        width={15}
                        height={15}
                        alt="close button"
                        onClick={() => handleToggleVisibility()}
                    />
                </div>
            </header>
            <div>{props.children}</div>
        </div>
    );
};

export default Badge;
