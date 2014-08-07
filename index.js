var async = require('async');

exports.doSomethingFun = function(msg){
    msg = msg || '';
    console.log("I'm doing something fun!" + msg);
};

exports.doSomethingFunInParallel = function(){
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