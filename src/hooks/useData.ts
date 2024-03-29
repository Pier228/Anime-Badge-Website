import type IData from "@/interfaces/IData";
import Caching from "@/services/ChachingService";
import { useEffect, useState } from "react";

const useData = (): IData | null => {
    const [data, setData] = useState<IData | null>(null);

    useEffect(() => {
        const getData = Caching.getData("anime-badge-data");
        if (getData) {
            setData(getData);
        }
    }, []);

    return data;
};

export default useData;