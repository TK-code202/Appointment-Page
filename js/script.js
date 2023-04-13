$(document).ready(function() {
    $("#formOne").submit(function(event) {
        
        
        $(".content").hide();
        $(".content2").show();
       

        event.preventDefault();
    });
});