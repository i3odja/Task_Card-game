window.onload = function() { // после загрузки страницы
    var divElement = $('.tail2');
    var colors = ["yellow","red","black","green","pink","orange","blue","brown","yellow","red","black","green","pink","orange","blue","brown"];
   
    for(var i = 0; i < 16; ++i) {
        var randIndex = Math.floor((Math.random() * colors.length) + 1);
        $(divElement[i]).css('background-color',colors[randIndex-1]);
        colors.splice(randIndex-1,1);
    };
    
     //TODO: random generate
    
    
    
   /* for(var i = 0; i < colors.length; i++) {
        alert(colors[i]);
        for(var j = 0; j < 2; j++) {
            var randIndex = Math.floor((Math.random() * 16) + 1);
            alert(randIndex);
            $(divElement[randIndex]).css('background',colors[i]);
        }
        
    };*/
    
    for (var i = 0; i < divElement.length; ++i) {
        divElement[i].onclick = clickOnCard;
    }; 

}

function reloadPage(){
    window.location.reload();
}

function randomColor(){
    for(var i = 0; i < 16; ++i) {
        var randIndex = Math.floor((Math.random() * colors.length) + 1);
        //alert(colors.length+" = ДОВЖИНА ");
        $(divElement[i]).css('background',colors[randIndex-1]);
        colors.splice(randIndex-1,1);
        //alert(randIndex + " RandIndex");
        //alert(colors);
        //alert(colors.length+" = ДОВЖИНА ");
        
        
    };
}

function clickOnCard(){
    
    $(this).addClass('selected');
    $(this).removeClass('tail2');
    $(this).addClass('tail');
    //TODO: check if not white card
    if($('.selected').length == 2){
        if( $($('.selected').get(0)).css('background-color') == $($('.selected').get(1)).css('background-color')){
            $($('.selected').get(0)).css('background-color','white');
            $($('.selected').get(1)).css('background-color','white');
            //TODO: do not clik on white space
            $($('.selected').get(0)).addClass('disabled');
            $($('.selected').get(1)).addClass('disabled');
            
            var disElements = $('.disabled');
            //alert(disElements.length);
            
            if(disElements.length == 16){
                $('#restart').css('display','block');
                
            }
            
            //TODO: end? message me
        }
        else{
            $($('.selected').get(0)).addClass('tail2');
            $($('.selected').get(0)).removeClass('tail');
            
            $($('.selected').get(1)).addClass('tail2');
            $($('.selected').get(1)).removeClass('tail');
        }
        $('.selected').removeClass('selected');
    }
}

