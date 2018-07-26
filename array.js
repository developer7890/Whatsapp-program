  $(document).ready(function() {
   var myarray = [["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 1"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 2"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 3"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 4"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 5"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 6"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 7"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 8"],
                  ["https://pbs.twimg.com/profile_images/980832989994250240/NiVKoNZp_400x400.jpg","Yuvraj Singh 9"],
                 ];
                 var i;
                  for(i=0;i<9;i++) {
                    $(".middlelist").append("<li><img  src=" + myarray[i][0] + "><span>" + myarray[i][1] + "</span></li>");
                  }

                    $(".middlelist li").click(function() {
                      var playername= $(this).text();
                      var imageurl= $(this).find('img').prop('src');
                      location.href="chatwindow.html?name="+playername+"&url="+imageurl+""


                    });
                });
