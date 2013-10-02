

$(document).ready(function(e){
var head= $('.ms-viewheadertr'),
    headText = head.html();
    //**Takking the headers out as thead elements
    head.parent().parent().prepend('<thead>'+headText+'</thead>');
    head.remove();

/**var stackedTable = $('#onetidMngCytpeRptrTable');
    stackedTable.find('th').each(function(e){
      var textValue = $(this).text();
      stackedTable.find('tr').each(function(e){
        $(this).find()
      });
    }); **/

});


