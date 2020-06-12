$(document).ready(function(){

   $('.section').waypoint(function(direction){
        if (direction == 'down') {
            $('nav').addClass('stick')
        } else {
            $('nav').removeClass('stick')
        }
   }, {
       offset:'60px;'
   });

   

});