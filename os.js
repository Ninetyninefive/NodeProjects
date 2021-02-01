const os = require('os');

const totalMem = os.totalmem();
const freemem = os.freemem();

console.log ("totalmem:"+ os.totalmem);
console.log ("freeMem:" + freemem);