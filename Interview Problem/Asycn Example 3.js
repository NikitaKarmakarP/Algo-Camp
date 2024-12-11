console.log("Hello World");
for(let i=0;i<3;i++){ // i=3
    // some task //10s
}
setTimeout(function exec() {
    console.log("Timer done");
}, 10);
for (let i = 0; i < 1000000000; i++) {
    // some task //10s
}
console.log("end");
