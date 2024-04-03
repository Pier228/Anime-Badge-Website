"use client";
import { fairyDustCursor } from "cursor-effects";
import { useEffect } from "react";

const Cursor = ({ cursorEffectVisible }: { cursorEffectVisible: boolean }) => {
    useEffect(() => {
        const cursor = fairyDustCursor({
            colors: ["#6809ae", "#3a065d"],
        });
        if (!cursorEffectVisible) {
            cursor.destroy();
        }

        return () => {
            cursor.destroy();
        };
    }, [cursorEffectVisible]);

    return <></>;
};

export default Cursor;
