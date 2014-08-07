var async = require('async');
var debug = require('debug')('common');

exports.doSomethingFun = function(msg){
    msg = msg || '';
    debug('doSomethingFun');
    console.log("I'm doing something fun!" + msg);

};

exports.doSomethingFunInParallel = function(){
    debug('doSomethingFunInParallel');
    async.parallel([
        somethingFunInParallel,
        somethingFunInParallel,
        somethingFunInParallel
    ])

    function somethingFunInParallel(callback){
        setTimeout(function(){
            exports.doSomethingFun(" (In parallel) ");
            callback();
        }, 100);
    }
}