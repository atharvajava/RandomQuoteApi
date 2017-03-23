$(document).ready(function() {
  var randomQuote;
  var randomAuthor;
  
    function getQuote(){
     var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url,function(data){
        $(".quote").html('"'+data.quoteText+'"<br>');
        $(".author").html('-'+data.quoteAuthor);
      });
    }
 getQuote();
  $("#nQ").on("click",function(){
    getQuote();
  });
  $("#tweet").on("click",function(){
    window.open("http://twitter.com/intent/tweet?text="+randomQuote+" "+randomAuthor);
  });
});