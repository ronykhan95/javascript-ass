function hotelCost(totalDay) {
    if( totalDay>=1 && totalDay<=10){
        var taka = 100;
        return totalDay * taka;
    }
    else if(totalDay>=11 && totalDay<=20){
        var taka = 80;
        return totalDay * taka;
    }
    else{
        var taka = 50;
        return totalDay * taka;

    }
}
var result =  hotelCost(45);
