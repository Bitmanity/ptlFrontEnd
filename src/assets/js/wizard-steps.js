/*=========================================================================================
    File Name: wizard-steps.js
    Description: wizard steps page specific js
    ----------------------------------------------------------------------------------------
    Item Name: Apex - Responsive Admin Theme
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Wizard tabs with icons setup
$(document).ready( function(){
    let created = false;
    $(".icons-tab-steps").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="step">#index#</span> #title#',
        labels: {
            finish: 'Submit'
        },
        onStepChanged:function (event, currentIndex){
         
         
          
        },
        onFinished: function (event, currentIndex) {
            if (!created) {
               $(".icons-tab-steps").find("a[href='#finish']").after("<input id='submitButton' type='submit'>");
               created = true;
           }
           $("#submitButton").hide().click();
        }
    });

    // To select event date
    // $('.pickadate').pickadate();
 });