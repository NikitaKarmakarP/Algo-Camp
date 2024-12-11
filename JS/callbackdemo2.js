function fun(x, fn) {
    for(let i = 0; i < x; i++){
        console.log(i);
    }

    fn(x*x);
}

fun(10, function exec(x){
    console.log(num);
}); //calling fun
