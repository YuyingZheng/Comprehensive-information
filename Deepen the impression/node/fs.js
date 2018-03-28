'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});/**
 * Created by Administrator on 2016/9/2.
 */
var rs1 = fs.createReadStream('sample.txt', 'utf-8');

rs1.on('data', function (chunk) {
    console.log('DATA1:')
    console.log(chunk);
});
rs1.on('data', function (chunk) {
    console.log('DATA2:')
    console.log(chunk);
});
rs1.on('end', function () {
    console.log('END');
});

rs1.on('error', function (err) {
    console.log('ERROR: ' + err);
});

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);