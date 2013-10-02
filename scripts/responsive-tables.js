

$(document).ready(function(e){
var head= $('.ms-viewheadertr'),
    headText = head.html();
    //**Takking the headers out as thead elements
    head.parent().parent().prepend('<thead>'+headText+'</thead>');
    head.remove();

  var stackedTable = $('table#onetidMngFieldRptrTable'),
      headings = new Array(),
      headingCount = 0;
    stackedTable.find('tbody tr th').each(function(e){

      headings[headingCount] = $(this).text();

      
      stackedTable.find('tr').not('first-child').each(function(e){
        
        var    countIterator = 0;
        $(this).find('.ms-vb2').each(function(e){
            var fieldValue = $(this).html();
            $(this).html('<span class="field-name">'+ headings[countIterator] + '</span> ' + fieldValue);
            countIterator++;
            console.log('countIterator: ' + countIterator + 'headings[countIterator]: ' + headings[countIterator]);
        });
      });
      headingCount++;
    }); 

});


