/**
 * 对lib/utils.js的测试
 * */

let utils = require('../lib/utils.js');
let expect = require('chai').expect;

describe('utils: 工具方法测试', function() {
    // defer对象测试
    describe('utils.getDefer', function() {
        let defer = utils.getDefer();

        it('defer成功', function() {
            defer.res(true);
            return defer.promise.then(function(data) {
                expect(data).to.be.equal(true);
            });
        });

        it('defer失败', function() {
            defer.rej(true);
            return defer.promise.then(function(){}, function(data) {
                expect(data).to.be.equal(true);
            });
        });
    });

    /**
     * when测试
     * */
    describe('utils.when', function() {
        let defer1 = utils.getDefer();
        let defer2 = utils.getDefer();
        let defer3 = utils.getDefer();
        let defer4 = utils.getDefer();

        it('when成功', function() {
            defer1.res(true);
            defer2.res(true);
            return utils.when([defer1.promise, defer2.promise]).then(function(data) {
                expect(data).to.be.deep.equal([true, true]);
            })
        });

        it('when失败', function() {
            defer3.rej(false);
            defer4.rej(false);
            return utils.when([defer3.promise, defer4.promise]).then(function(){}, function(data) {
                expect(data).to.be.deep.equal(false);
            });
        });
    });
});
