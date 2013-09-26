(function($)
{




var head= $('.ms-viewheadertr'),
    headText = head.html();

    head.parents('table').prepend(headText);
    head.remove();



}(jQuery));