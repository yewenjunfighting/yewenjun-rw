let file = require('../lib/file.js');
let expect = require('chai').expect;

describe('file:功能测试', function() {

    /**
     * writeFile功能测试
     * */

    describe('file.writeFile', function() {
        it('写文件: 成功', function() {
            let path = 'README.md';
            let data = '说明文档';
            return file.writeFile(path, data).then(function(flag) {
                expect(flag).to.be.equal(true);
            });
        });

        it('写文件: 失败', function() {
            let path = 'write-test.txt';
            let data = '我是写入的数据';
            return file.writeFile(path, data).then(function(){}, function(err) {
                expect(true).to.be.equal(true);
            });
        });
    });

    /**
     * readFile功能测试
     * */

    describe('file.readFile功能测试', function() {

        it('读文件: 成功', function() {
            let path = 'README.md';
            return file.readFile(path).then(function(data) {
                expect(data).to.be.equal('说明文档');
            });
        });

        it('读文件: 失败', function() {
            let path = 'write-text.txt';
            return file.readFile(path).then(function(){}, function(err) {
                expect(true).to.be.equal(true);
            });
        });
    });
});
