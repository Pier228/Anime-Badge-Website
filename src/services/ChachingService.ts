import defaultData from "@/interfaces/DefaultData";

export default class Caching {
    static cacheData(key: string, value: Object) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getData(key: string) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return false;
    }

    static setDefaultData() {
        this.cacheData("anime-badge-data", defaultData);
        return this.getData("anime-badge-data");
    }
}
