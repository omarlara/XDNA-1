

$(document).ready(function(e){
var head= $('.ms-viewheadertr'),
    headText = head.html();

    head.parents('table').prepend('<thead>'+headText+'</thead>');
    head.remove();

});


