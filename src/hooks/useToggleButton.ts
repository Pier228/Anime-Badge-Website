import { useState, useEffect } from "react";
import useData from "./useData";

const useToggleButton = () => {
    const [isBackgroundVisible, setVisibility] = useState(false);
    const [isCursorEffect, setCursorEffect] = useState(false);
    const data = useData();

    const changeBackgroundVisibility = () => {
        setVisibility(!isBackgroundVisible);
    };

    const changeCursorVisibility = () => {
        setCursorEffect(!isCursorEffect);
    };

    useEffect(() => {
        setVisibility(Boolean(data?.background));
        setCursorEffect(Boolean(data?.cursorEffect));
    }, [data]);

    return {
        isBackgroundVisible,
        isCursorEffect,
        changeBackgroundVisibility,
        changeCursorVisibility,
    };
};

export default useToggleButton;
