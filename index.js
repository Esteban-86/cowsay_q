const userInfo = require('./information');
console.log(`Hi, my name is ${userInfo.name} from remote ${userInfo.campus} campus`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} from remote ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));

