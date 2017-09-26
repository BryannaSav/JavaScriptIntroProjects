function fancyArray(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]=i+"->"+arr[i];
        console.log(arr[i]);
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"]);