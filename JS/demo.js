function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i=0; i < 1000000000; i++) {
        // some task
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer");
        for(let i=0; i < 1000000000; i++) {
            // some task
        }
    },5000); // 5 seconds later
}

function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer1");
            // some task
    },0); // 0 seconds later
}

function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer2");
            // some task
    },200); // 200 seconds later
}

console.log("hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By");
