module.exports = class OtherClass {
    constructor(special) {
        this._tag = "xXx";
        this._spec = special;
    }

    gamerTagCreator(nick) {
        return this._tag + nick + "69" + this._tag;
    }
};