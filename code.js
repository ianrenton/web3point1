// New window: show and bring to top
function newWindow(element) {
    $(element).show();
    $(element).selectWindow();

    if (element == '#doom') {
    	loadDoom();
    }
}


// Load DOOM, because we can
function loadDoom() {
	$.getScript('https://js-dos.com/6.22/current/js-dos.js', function() {
		Dos(document.getElementById("doomcanvas"), {
	        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
	        cycles: 1000,
	        autolock: false,
	    }).ready(function (fs, main) {
	      fs.extract("https://js-dos.com/cdn/upload/DOOM-@evilution.zip").then(function () {
	        main(["-c", "cd DOOM", "-c", "DOOM.EXE"]).then(function (ci) {
	            window.ci = ci;
	        });
	      });
	    });
	});
}

$( function() {
    // Window drag
    $( ".window" ).draggable({ handle: "div.windowtitle" });

    // Window resize
    $( ".window" ).resizable({ handles: "all", alsoresize: ".windowinner" });

    // Window close
    $('.windowclose').on("dblclick", function () { $(this).parents('div.window').hide(); });

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
    $('.window').mousedown(function() {
        $(this).selectWindow();
    });

    // Icon single click
    $('.icon').click(function() {
      $(this).find('p').toggleClass('highlight');
    });
} );
