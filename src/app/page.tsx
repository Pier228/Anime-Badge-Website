"use client";
import Badge from "@/components/Badge/Badge";
import CalendarBadge from "@/components/Calendar/Calendar";
import DanceFloor from "@/components/DanceFloor/DanceFloor";
import MainBadge from "@/components/MainBadge/MainBadge";
import TerminalBadge from "@/components/Terminal/TerminalBadge";
import WeatherBadge from "@/components/Weather/WeatherBadge";
import Image from "next/image";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import Link from "next/link";
import Background from "@/components/Background/Background";
import useBackgroundVisibility from "@/hooks/useBackgroundVisibility";

const Home = () => {
    const { isVisible, changeVisibility } = useBackgroundVisibility();

    return (
        <>
            {isVisible && <Background />}
            
            {/* The button will be placed on the settings page */}
            <button
                className={rounded_btn.left_btn}
                onClick={() => changeVisibility()}
            >
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
            <Link href="/settings" className={rounded_btn.right_btn}>
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
