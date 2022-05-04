// log the message to a txt file in the src directory
const fs = require('fs')

const logSuccess = async (doorID) => {
    let door;
    console.log(door);
    if (doorID === 116400) {
        door = '7A';
    } else {
        door = '7B';
    }
    const timestamp = new Date().toUTCString();
    const logMessage = `The door at ${door} was unlocked at ${timestamp} \n`;
    fs.appendFileSync('./src/logs/success.txt', logMessage);
}

module.exports = { logSuccess }
