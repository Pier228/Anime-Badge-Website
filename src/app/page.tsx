"use client";
import Badge from "@/components/Badge/Badge";
import CalendarBadge from "@/components/Calendar/Calendar";
import DanceFloor from "@/components/DanceFloor/DanceFloor";
import MainBadge from "@/components/MainBadge/MainBadge";
import TerminalBadge from "@/components/Terminal/TerminalBadge";
import WeatherBadge from "@/components/Weather/WeatherBadge";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/buttons/buttons.module.scss";
import Link from "next/link";
import Background from "@/components/Background/Background";
import BackgroundService from "@/services/BackgroundService";

const Home = () => {
    const [isVisible, setVisibility] = useState(false);

    const visibilityChange = () => {
        setVisibility(BackgroundService.changeStatus());
    };

    useEffect(() => {
        setVisibility(BackgroundService.isExist());
    }, []);

    return (
        <>
            {isVisible && <Background />}
            <button className={styles.left_btn} onClick={visibilityChange}>
                <Image
                    src={`${
                        isVisible
                            ? "/images/camera.png"
                            : "/images/no-pictures.png"
                    }`}
                    width={20}
                    height={20}
                    alt="camera"
                />
                Background mode
            </button>
            <Link href="/settings" className={styles.right_btn}>
                <Image
                    src="/images/settings.png"
                    width={20}
                    height={20}
                    alt="settings"
                />
                Settings
            </Link>
            <div>
                <Badge children={<CalendarBadge />} id="calendar" />
                <Badge children={<DanceFloor />} id="danceFloor" />
            </div>
            <MainBadge />
            <div>
                <Badge children={<WeatherBadge />} id="weather" />
                <Badge children={<TerminalBadge />} id="console" />
            </div>
        </>
    );
};

export default Home;
