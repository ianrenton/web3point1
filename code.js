// New window: show and bring to top
function newWindow(element) {
    $(element).show();
    $(element).selectWindow();
}

$( function() {
    // Window drag
    $( ".window" ).draggable({ handle: "div.windowtitle" });

    // Window resize
    $( ".window" ).resizable({ handles: "all", alsoresize: ".windowinner" });

    // Window close
    $('.windowclose').on("click", function () { $(this).parents('div.window').hide(); });

    // Window click-to-bring-to-top
    (function() {
        var highest = 100;

        $.fn.selectWindow = function() {
            // Make top
            this.css('z-index', ++highest);
            // Make this window selected and others not
            this.addClass('selectedwindow');
            $('.window').not(this).each(function(){
                $(this).removeClass('selectedwindow');
             });
        };
    })();
    $('.window').click(function() {
        $(this).selectWindow();
    });

    // Icon single click
    $('.icon').click(function() {
      $(this).find('p').toggleClass('highlight');
    });
} );