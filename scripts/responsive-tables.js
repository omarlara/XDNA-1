
$(document).ready(function(e){
/**var head= $('.ms-viewheadertr'),
    headText = head.html();
    //**Takking the headers out as thead elements
    head.parent().parent().prepend('<thead>'+headText+'</thead>');
    head.remove();

  var stackedTable = $('table#onetidMngFieldRptrTable, table#onetidMngCytpeRptrTable'),
      headings = new Array(),
      headingCount = 0;
      
      stackedTable.find('tbody tr th').each(function(e){
      headings[headingCount] = $(this).text();
      // stackedTable.find('tr').not('first-child').each(function(e){
        
        var   countIterator = 0;
        $(this).find('tr td.ms-vb2').each(function(e){
            var fieldValue = $(this).html();
            $(this).html('<span class="field-name">'+ headings[countIterator] + '</span> ' + fieldValue);
            countIterator++;
            console.log('countIterator: ' + countIterator + 'headings[countIterator]: ' + headings[countIterator]);
        });
      //});
      headingCount++;
    }).parent().remove();

  




  var $sptableList = $("table.ms-listviewtable > tbody");
  var $headers = $sptableList.find("> tr.ms-viewheadertr > th");
  var $items = $sptableList.find("> tr.ms-itmhover");
  $items.each(function() {
    $item = $(this);
    var counter = 0;
    $cols = $item.find(" > td");
    $cols.each(function() {
      $mobileHeader = $("<div class='mob-header'></div>");
      $mobileHeader.append($($headers[counter]).html());
      $(this).prepend($mobileHeader);
      counter++;
    });
  });**/
var table = $('#main-content table'),
    heading = {
        number: null,
        value: null
    },
    counter = 1;
    var headings= new Array();
    
    $('#main-content tbody th').each(function(e){
        var value = $(this).text();
        
        heading.number = counter;
        heading.value = value;
        
        headings[counter] = heading;
        
        table.find('tr > td.ms-vb2:nth-child('+heading.number+')').prepend('<span class="fieldName">'+heading.value+'</span>');
        
        counter++;
    });

    // Stacked table approach

    var tableTitle = $('.ms-vb-title');

    tableTitle.each(function(e){
        var titleHtml = $(this).text();
        titleHtml = $.trim(titleHtml);
      
        var thisParent = $(this).parent();
        thisParent.before('<tr class="accordion-title" style="display:block; width:100%"><td>'+titleHtml+'</td></tr>');
        //thisParent.hide();
        

    });

    $('.accordion-title')
          .on({
            click: function(){

              $('.accordion-title').not(this).removeClass('active').next().slideUp(100);



              $(this).toggleClass("active").next().slideToggle(200);
              
            }
          });

      var resetTable = function(e){

        var windowSize = $(window).width();
        if (windowSize > 768) {
          //Little fix to avoid display block while showing the element
           $('.ms-itmhover').show(100,function(e){$(this).removeAttr('style');});
               
        }else{
          $('.accordion-title').next().slideUp(100);
        }
      }
      resetTable();
      $(window).resize(function(e){ resetTable(); });
});


