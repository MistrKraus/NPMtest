module.exports = class HelloWorld {
    constructor() {
        let otherC = require("./OtherClass");
        this.oc = new otherC(")x(");
    }

    static f(mess) {
        console.log("Hello npm world!");
        console.log("This your message: " + mess);
    };

    callFunction() {
        console.log(this.oc.gamerTagCreator("Cherry"));
    }
};

let helloW = require('./index');
let hello = new helloW();
helloW.f("MucQ :*");
hello.callFunction();