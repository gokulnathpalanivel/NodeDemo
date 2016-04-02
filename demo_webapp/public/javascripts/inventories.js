$(document).ready(function(){
    
    //Show/Hide the inventories panel on click
    $("div[class^='cat_']").on('click',function() {
        var actElem = $(this).find('.tgl');
        var actContainer = $(this).find('.cntr');
        
        //Hide active inventories
        $('.tgl').not(actElem).removeClass('active');
        $('.cntr').not(actContainer).addClass('dspNone');
        
        //Open currently clicked inventory
        $(actElem).toggleClass('active');
        $(actContainer).toggleClass('dspNone');
    });
    
    $(".del, a.lnk").on('click',function(event) {
        event.stopPropagation();        
    });
});