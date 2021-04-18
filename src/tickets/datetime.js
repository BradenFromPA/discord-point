const date_ob = new Date();

class DateNow {

    constructor() {
        this.day = ('0' + date_ob.getDate()).slice(-2);
        this.month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
        this.year = date_ob.getFullYear();
    }

    get DMY() {
        return (this.day + '-' + this.month + '-' + this.year);
    }
    get DYM() {
        return (this.day + '-' + this.year + '-' + this.month);
    }
    get MDY() {
        return (this.month + '-' + this.day + '-' + this.year);
    }
    get MYD() {
        return (this.month + '-' + this.year + '-' + this.day);
    }
    get YMD() {
        return (this.year + '-' + this.month + '-' + this.day);
    }
    get YDM() {
        return (this.year + '-' + this.day + '-' + this.month);
    }
}

class TimeNow {

    constructor() {
        this.unix = Math.floor(date_ob.getTime() / 1000);

        this.seconds = date_ob.getSeconds();
        this.minutes = date_ob.getMinutes();
        this.hours = date_ob.getHours();
    }
    get REG() {
        if(this.seconds < 10) {
            this.seconds = ('0' + (this.seconds.toString()));
        }
        else if(this.minutes < 10) {
            this.minutes = ('0' + (this.minutes.toString()));
        }
        if(this.hours > 12) {
            return ((this.hours - 12) + ':' + this.minutes + ':' + this.seconds + ' PM');
        }
        else {
            return (this.hours + ':' + this.minutes + ':' + this.seconds + ' AM');
        }
    }
    get MIL() {
        if(this.seconds < 10) {
            this.seconds = ('0' + (this.seconds.toString()));
        }
        else if(this.minutes < 10) {
            this.minutes = ('0' + (this.minutes.toString()));
        }
        return (this.hours + ':' + this.minutes + ':' + this.seconds);
    }
}

module.exports = {
    DateNow,
    TimeNow
}