function kilometerToMeter(num){
    if(num>0){
        var meter = num *1000;
    return meter;
    }
    else if(num<0){
         console.log("Not valid");
    }
}









function budgetCalculator(ghori,phone,laptop){
    if(ghori>0 && phone>0 && laptop>0){
        var total=(ghori*50)+(phone*100)+(laptop*500);
        return total;
    }
    else {
        console.log("Value are Not Valid")
    }
}








function hotelCost(num){
    if (num>=1 && num<=10){
        var result1=num*100;
         return result1;
    }
    else if (num>=11 && num<=20){
        var result2=1000+(num-10)*80;//last 10 days Cost+substraction of 10 days*2nd 10 days cost
        return result2;
    }
    else if(num>20){
        var result3=1000+800+(num-20)*50;//last 20 days Cost+substraction of 20 days*rest of days cost
        return result3;
    }
    else{
        console.log("Unexpected Values");
    }
}










function megaFriend(freindsName){
    var size = 0;
    var longest;
    
    for (var i = 0; i < freindsName.length; i++) {
      if (freindsName[i].length > size) {
        var size = freindsName[i].length;
        longest = freindsName[i];
        
      }
    }
    return longest;
  }
  


