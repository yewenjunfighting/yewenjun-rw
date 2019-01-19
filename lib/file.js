/**
 * lib 是功能文件
 * */
let fs = require("fs");
let path = require('path');
let utils = require('./utils.js');

module.exports = {
    /**
     * 写文件
     * @param file 文件路径
     * @param data 数据
     * */
    writeFile: function(file, data) {
        let defer = utils.getDefer();
        file = path.resolve(file);

        fs.writeFile(file, data, 'utf-8', function(err) {
            if(err) {
                defer.rej(err);
            }else {
                defer.res(true)
            }
        });
        return defer.promise;
    },
    /**
     * 读文件
     * @param file 文件路径
     * */
    readFile: function(file) {
        let defer = utils.getDefer();
        file = path.resolve(file);

        fs.readFile(file, 'utf-8', function(err, data) {
            if(err) {
                defer.rej(err);
            }else {
                defer.res(data);
            }
        });
        return defer.promise;
    }
};
