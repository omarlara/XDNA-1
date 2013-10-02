

$(document).ready(function(e){
var head= $('.ms-viewheadertr'),
    headText = head.html();
    //**Takking the headers out as thead elements
    head.parent().parent().prepend('<thead>'+headText+'</thead>');
    head.remove();

  var stackedTable = $('#onetidMngCytpeRptrTable'),
      headings = new Array(),
      headingCount = 0;
    stackedTable.find('th').each(function(e){

      headings[headingCount] = $(this).text();
      consold.log(headingCount + 'Heading: '+ headings[headingCount]);

      
      stackedTable.find('tr').not('first-child').each(function(e){
        
        var    countIterator = 0;
        $(this).find('.ms-vb2').each(function(e){
            var fieldValue = $(this).text();
            $(this).html(headings[countIterator] + ' ' + fieldValue);
            countIterator++;
        });
      });
      headingCount++;
    }); 

});


