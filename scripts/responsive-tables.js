(function($)
{
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
});
}(jQuery));