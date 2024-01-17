import Badge from "@/components/Badge/Badge";
import DanceFloor from "@/components/DanceFloor/DanceFloor";
import MainBadge from "@/components/MainBadge/MainBadge";

const Home = () => {
    return (
        <>
            <div>
                <Badge children={<div>Calendar</div>} />
                <Badge children={<DanceFloor />} />
            </div>
            <MainBadge />
            <div>
                <Badge children={<div>Weather</div>} />
                <Badge children={<div>Console</div>} />
            </div>
        </>
    );
};

export default Home;
