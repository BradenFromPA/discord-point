const uuid = require('./uuid');
const datetime = require('./datetime');
const date = new datetime.DateNow();
const time = new datetime.TimeNow();


class Ticket {
    constructor(scope, descShort, descFull) {
        this.createdAt = time.unix,
        this.humanDate = date.MDY,
        this.humanTime = time.REG,
        this.uuid = uuid,
        this.scope = scope,
        this.descShort = descShort,
        this.descFull = descFull
    }
};