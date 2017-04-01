/*
Program Name:Recipe Display Application
Author: Trista Reeves
Date: 03/30/2017
Filename: myrecipe.js
*/

//displays the next element after the current target
    function display(event) {
            
             $(event.currentTarget).next().fadeIn('fast');

        }
       
        //end of display//attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display);
