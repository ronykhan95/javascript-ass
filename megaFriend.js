function megaFriend (list) {
    var max = list[0];
    for(var i = 0; i < list.length; i++){
        var element = list[i];
        if(element.length > max.length){
            max = element; 
        }
    }
   return max;
}
var result = megaFriend(["rony","polash","hemal","ronykhansaidul","ronykhansaidul"]);
