function goTo(url){
  var x = window.open();
  if(!x) throw new Error("Error: Popups not allowed bruv");
  x.close();
  window.open(url + query, "", "width=100, height=100");
  var y = window.open();
  y.close();
}
function searchAllUp(queries){
  goToAll(queries.map(query => "https://www.google.com/search?q=" + encodeURIComponent(query)));
}
function goToAll(urls){
  for(var url of urls){
    try{
      goTo(url);
    } catch(e){
      console.log("Allow popups (dw wont crash i swear)");
    }
  }
}
searchAllUp([
  "Child porn",
  "Porn",
  "Hentai",
  "Gay porn",
  "Gay sex",
  "Lesbian sex",
  "What to do if I have aids",
  "Where to buy condoms",
  "Best condom brands for sensitivity",
  "Where to buy condoms discreetly online",
  "Best flavored condoms for oral",
  "Condom size guide for better fit",
  "Latex-free condom options",
  "Best condom for lasting longer in bed",
  "How to use condoms properly step-by-step",
  "Condom bulk purchase discounts",
  "Where to find free condoms near me",
  "Best condom alternatives for safe sex",
  "Most durable condoms for maximum protection",
  "Top 10 condom brands",
  "Eco-friendly biodegradable condoms",
  "Condoms for people with allergies",
  "Best condoms for enhanced pleasure",
  "Condom buying tips for first-time users",
  "Water-based vs. silicone-based lubricants with condoms",
  "How to dispose of condoms properly",
  "Can condoms be reused? Health facts",
  "Innovative condom technologies"
]);
goToAll({
  "https://www.pornhub.com",
  "https://www.xvideos.com",
  "https://www.xhamster.com",
  "https://www.redtube.com",
  "https://www.youporn.com",
  "https://www.chaturbate.com",
  "https://www.livejasmin.com",
  "https://www.onlyfans.com",
  "https://www.fuckbook.com",
  "https://www.cam4.com",
  "https://www.royalcams.com",
  "https://www.brazzers.com",
  "https://www.spankbang.com",
  "https://www.youjizz.com",
  "https://www.myfreecams.com",
  "https://www.streamate.com",
  "https://www.porn.com",
  "https://www.naughtyamerica.com",
  "https://www.mofos.com",
  "https://www.hclips.com"
});
