const colors = require("colors");
function log(type, val) {
    if(type == "e") {
        console.log(colors.red("[!] "+val));
    } else if(type == "i") {
        console.log(colors.yellow("[i] "+val));
    } else if(type == "+") {
        console.log(colors.green("[+] "+val));
    } else if(type == "d") {
        console.log(colors.cyan("[D] "+val));
    } else if(type == "-") {
        console.log(colors.red("[-] "+val));
    }
}

module.exports = log;