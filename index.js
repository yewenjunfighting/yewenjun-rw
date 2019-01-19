/**
 * 主入口
 * 导出被使用的接口
 * */

let file = require('./lib/file.js');

module.exports = {
    writeFile: file.writeFile,
    readFile: file.readFile
};
