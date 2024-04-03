"use client";
import { fairyDustCursor } from "cursor-effects";
import { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        fairyDustCursor({
            colors: ["#6809ae", "#3a065d"],
        });
    }, []);

    return <></>;
};

export default Cursor;
