function numbers(arr){
    var numarr = [];
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i]==="number"){
            numarr.push(arr[i]);
        }
    }
    return numarr;
}
numbers([1, "apple", -3, "orange", 0.5]);