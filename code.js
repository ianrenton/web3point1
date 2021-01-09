// Show and bring to top
function showAndMakeTop(element) {
    $(element).show();
    $(element).bringToTop();
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

        $.fn.bringToTop = function() {
            this.css('z-index', ++highest); // increase highest by 1 and set the style
        };
    })();
    $('.window').click(function() {
        $(this).bringToTop();
    });

    // Icon single click
    $('.icon').click(function() {
      $(this).find('p').toggleClass('highlight');
    });
} );