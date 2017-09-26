function birthdaycountdown(daysUntilMyBirthday){
    while(daysUntilMyBirthday>0){
        if(daysUntilMyBirthday>30){
            console.log(daysUntilMyBirthday, "days until my birthday. Such a long time...");
        }
        else if(daysUntilMyBirthday<=30 && daysUntilMyBirthday>5){
            console.log(daysUntilMyBirthday, "days until my birthday!");
        }
        else if(daysUntilMyBirthday<=5){
            console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
        }
        daysUntilMyBirthday--;
    }
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
}
console.log(birthdaycountdown(60));