"use client";
import { ReactTerminal } from "react-terminal";
import styles from "@/styles/terminal/terminal.module.scss";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "@/lib/reducers/badgeReducer";

const TerminalBadge = () => {
    const dispatch = useDispatch();

    const commands = {
        calendar: () => {
            dispatch(toggleVisibility("calendar"));
        },
        danceFloor: () => {
            dispatch(toggleVisibility("danceFloor"));
        },
        weather: () => {
            dispatch(toggleVisibility("weather"));
        },
        close: () => {
            dispatch(toggleVisibility("console"));
        },
        help: () => "Commands: " + Object.keys(commands).join("\n"),
    };

    return (
        <div className={styles.container}>
            <ReactTerminal
                commands={commands}
                prompt=">"
                showControlBar={false}
                errorMessage="Command not found!"
                themes={{
                    "purple-theme": {
                        themeColor: "#6809ae",
                        themePromptColor: "#6809ae",
                    },
                }}
                theme="purple-theme"
                welcomeMessage={<p>Type 'help' to view a list of commands</p>}
            />
        </div>
    );
};

export default TerminalBadge;
