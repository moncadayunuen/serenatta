$(document).ready(function(){
    $('input.timepicker').timepicker(
        { 
            timeFormat: 'h:mm:ss p' 
        }
    );
    $('[data-toggle="datepicker"]').datepicker();
});
