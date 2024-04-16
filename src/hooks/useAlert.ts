import { useState } from "react";

const useAlert = () => {
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState("");
    
    return {
        alertVisibility,
        alertMessage,
        alertColor,
        setAlertVisibility,
        setAlertMessage,
        setAlertColor,
    };
};

export default useAlert;