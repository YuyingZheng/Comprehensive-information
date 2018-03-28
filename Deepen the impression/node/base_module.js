/**
 * Created by Administrator on 2016/8/31.
 */
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
