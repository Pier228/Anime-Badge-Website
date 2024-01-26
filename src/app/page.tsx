import Badge from "@/components/Badge/Badge";
import CalendarBadge from "@/components/Calendar/Calendar";
import DanceFloor from "@/components/DanceFloor/DanceFloor";
import MainBadge from "@/components/MainBadge/MainBadge";
import TerminalBadge from "@/components/Terminal/TerminalBadge";

const Home = () => {
    return (
        <>
            <div>
                <Badge children={<CalendarBadge />} id="calendar" />
                <Badge children={<DanceFloor />} id="danceFloor" />
            </div>
            <MainBadge />
            <div>
                <Badge children={<div>Weather</div>} id="weather" />
                <Badge children={<TerminalBadge />} id="console" />
            </div>
        </>
    );
};

export default Home;
