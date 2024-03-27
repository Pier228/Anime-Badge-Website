export default class BackgroundService {
    static isExist() {
        if (localStorage.background == null) {
            localStorage.setItem("background", "true");
        }

        return this.getStatus();
    }

    static changeStatus() {
        localStorage.setItem("background", `${!this.getStatus()}`);
        return this.getStatus();
    }

    static getStatus() {
        const status = localStorage.getItem("background");
        return typeof status == "string" ? JSON.parse(status) : false;
    }
}
