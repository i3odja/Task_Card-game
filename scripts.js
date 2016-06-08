window.onload = function() { // после загрузки страницы
    var divElement = $('.tail2');
    var colors = ["yellow","red","black","green","pink","orange","blue","brown","yellow","red","black","green","pink","orange","blue","brown"];
   
    for(var i = 0; i < 16; ++i) {
        var randIndex = Math.floor((Math.random() * colors.length) + 1);
        $(divElement[i]).css('background-color',colors[randIndex-1]);
        colors.splice(randIndex-1,1);
    };

    
    for (var i = 0; i < divElement.length; ++i) {
        divElement[i].onclick = clickOnCard;
    }; 

}

function reloadPage(){
    window.location.reload();
}


function clickOnCard(){
    
    $(this).addClass('selected');
    $(this).removeClass('tail2');
    $(this).addClass('tail').delay(500);
    
    if($('.selected').length == 2){
        $('.tail2').each(function(i,e){e.onclick = undefined;});
        window.setTimeout(function(){
        
            if( $($('.selected').get(0)).css('background-color') == $($('.selected').get(1)).css('background-color')){
                $($('.selected').get(0)).css('background-color','white');
                $($('.selected').get(1)).css('background-color','white');

                $($('.selected').get(0)).addClass('disabled');
                $($('.selected').get(1)).addClass('disabled');
            
                var disElements = $('.disabled');
                
                if(disElements.length == 16){
                    $('#restart').css('display','block');
                }
            }
            else{
                $($('.selected').get(0)).addClass('tail2');
                $($('.selected').get(0)).removeClass('tail');
            
                $($('.selected').get(1)).addClass('tail2');
                $($('.selected').get(1)).removeClass('tail');
            }
            $('.selected').removeClass('selected');
            
            $('.tail2').each(function(i,e){e.onclick = clickOnCard;});
        },700);
    }
}

