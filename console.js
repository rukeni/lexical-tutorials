console.stdlog = console.log.bind(console);
const logs = [];
console.logs = [];
console.log = function(){
    console.dir(Array.from(arguments));
    console.logs.push(Array.from(arguments));
    logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}

console.log('23');

console.log('34');

