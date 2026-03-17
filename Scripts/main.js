/* jQuery event code */

/* Button Change text color */
$('#mybutton').click(function(){
    $('mytext').css('color', 'black');
});

/* Change paragragh text color by hover */
$('#textp').hover(
    function(){  /* Mouse goes over */
        $(this).css('color', 'black');
    },
    function(){   /* Mouse goes off */
        $(this).css('color', 'purple');
    }
);

/* Change heading text by hover */
$('#texth').hover(
    function(){   /* Mouse goes over */
        $(this).text('This text has changed!');
    },

    function(){   /* Mouse goes off */
        $(this).text('Using jQuery Selectors and Events');
    }
);