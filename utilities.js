
 function getqueryparamvalue(key) {
   //key= "mayank"
   //window.location = "chatwindow.html?name=Yuvraj%20Singh&url=http://xddsfksmfwsef.jpg"
   //window.location.search = ""?name=Yuvraj%20Singh&url=http://xddsfksmfwsef.jpg"
   //window.location.search.substring(1) = "name=Yuvraj+Singh&url=http://xddsfksmfwsef.jpg"

          var queryString = decodeURIComponent(window.location.search.substring(1))

          //queryString = "name=Yuvraj Singh&url=http://xddsfksmfwsef.jpg"
          var keyValuePairs = queryString.split('&')
          //keyValuePairs = ["name=Yuvraj Singh", "url=http://xddsfksmfwsef.jpg"]

// keyValuePairs.length = 2
          for (var i = 0; i < keyValuePairs.length; i++) {
            var keyValue = keyValuePairs[i].split('=');
            //when i = 0   keyValue = ["name", "Yuvraj Singh"]
            //when i = 1   keyValue = ["url", "http://xddsfksmfwsef.jpg"]

//when i = 0 if("name"  === "mayank")
//when i = 1 if("url"  === "mayank")
            if (keyValue[0] === key) {
              return keyValue[1] === undefined ? true : decodeURIComponent(keyValue[1]);
            }
          }
  };

function generateRandomText() {
  var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for( var i=0; i < Math.floor(Math.random() * 100); i++ ) {
       var index = Math.floor(Math.random() * possible.length);
       text += possible.charAt(index);
   }

   return text;
}
