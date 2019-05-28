$("td").click(function(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    $("td").text(itemName);
  }
});
