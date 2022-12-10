const myObj = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Mon nom est ${myObj.nom} et mon campus est la ${myObj.campus}`,
    e : "oO",
    T : "U "
}));