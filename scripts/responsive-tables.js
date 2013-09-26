

$(document).ready(function(e){
var head= $('.ms-viewheadertr'),
    headText = head.html();

    head.parent.parent().('table').prepend('<thead>'+headText+'</thead>');
    head.remove();

});


