"use client";
import Badge from "@/components/Badge/Badge";
import CalendarBadge from "@/components/Calendar/Calendar";
import DanceFloor from "@/components/DanceFloor/DanceFloor";
import MainBadge from "@/components/MainBadge/MainBadge";
import TerminalBadge from "@/components/Terminal/TerminalBadge";
import WeatherBadge from "@/components/Weather/WeatherBadge";
import Background from "@/components/Background/Background";
import useToggleButton from "@/hooks/useToggleButton";
import LinkButton from "@/components/Buttons/LinkButton";
import Cursor from "@/components/Cursor/Cursor";

const Home = () => {
    const { isBackgroundVisible, isCursorEffect } = useToggleButton();

    return (
        <>
            <Cursor cursorEffectVisible={isCursorEffect}/>
            {isBackgroundVisible && <Background />}

            <LinkButton
                text="Settings"
                href="/settings"
                image_src="/images/settings.png"
                classNames="right_btn"
            />
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
