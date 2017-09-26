function time(hour, min, period){
    if(min<30){
        if(period == "am"){
            console.log("It's just after " + hour + " in the morning")
        }
        else if(period == "pm"){
            console.log("It's just after ", hour," in the evening")
        }   
    }
    else if(min>30){
        if(period == "am"){
            console.log("It's almost ", (hour+1)," in the morning")
        }
        else if(period == "pm"){
            console.log("It's almost ", (hour+1)," in the evening")
        } 
    }
}
console.log(time(7,15,"am"));