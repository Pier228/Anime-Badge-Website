import type IData from "@/interfaces/IData";
import Caching from "@/services/CachingService";
import { useEffect, useState } from "react";

const useData = (): IData | null => {
    const [data, setData] = useState<IData | null>(null);

    useEffect(() => {
        const getData = Caching.getData("anime-badge-data");
        if (getData) {
            setData(getData);
        }else{
            const tmpData = Caching.setDefaultData();
            setData(tmpData);
        }

    }, []);

    return data;
};

export default useData;