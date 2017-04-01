/*
Program Name:Recipe Display Application
Author: Trista Reeves
Date: 03/30/2017
Filename: drill4.js
*/

    //displays the next element after the current target ANIMATE
        function display(event) {
            
             $(event.currentTarget).next().fadeIn('slow');

        }
        //end of display//attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display);

//CSS CHANGE to displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, 'slow');
}//end of display2

//add TRAVERSAL of DOM 
$(document).ready(function(){
    $("span").parent();
});