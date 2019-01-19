const Promise = require("es6-promise").Promise;

/**
 * 这个文件是用来定义函数的
 * */

module.exports = {
    /**
     * 获取Defer对象
     * @return {[type]} [description]
     * */
    getDefer: function () {
        let defer = {};
        defer.promise = new Promise(function (res, rej) {
            defer.res = res;
            defer.rej = rej;
        });
        return defer;
    },
    /**
     * promise when 方法
     * @param promise promise数组
     * @returns {[type]} [description]
     * */
    when:  function (promises) {
        let defer = this.getDefer();
        Promise.all(promises).then(function(data) {
            defer.res(data);
        }, function(err) {
            defer.rej(err);
        });
        return defer.promise;
    }
};
