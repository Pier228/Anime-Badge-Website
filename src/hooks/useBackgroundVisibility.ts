import { useState, useEffect } from "react";
import BackgroundService from "@/services/BackgroundService";

const useBackgroundVisibility = () => {
    const [isVisible, setVisibility] = useState(false);

    const changeVisibility = () => {
        setVisibility(BackgroundService.changeStatus());
    };

    useEffect(() => {
        setVisibility(BackgroundService.isExist());
    }, []);

    return { isVisible, changeVisibility };
};

export default useBackgroundVisibility;
