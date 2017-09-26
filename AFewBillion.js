function double(days, money){
    var sum=money;
    for(var i=2; i<=days; i++){
        money=money*2;
        sum+=money;
    }
    console.log(sum);
}
double(30, .01);