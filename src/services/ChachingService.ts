export default class Caching {
    static cacheData(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static getData(key: string) {
        if (localStorage[key]) {            
            return JSON.parse(localStorage[key]);
        }
        return false;
    }
}
