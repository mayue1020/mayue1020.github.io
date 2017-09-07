 $(function() {
     function qianbo(box) {
         for (var j = 0; j < box.length; j++) {
             switch (box[j].attr("dex")) {
                 case "1":
                     box[j].attr({
                         "class": "box3",
                         "dex": "3"
                     });
                     break;
                 case "2":
                     box[j].attr({
                         "class": "box1",
                         "dex": "1"
                     });
                     break;
                 case "3":
                     box[j].attr({
                         "class": "box2",
                         "dex": "2"
                     });
                     break;
             }
         }
     }

     function houbo(box) {
         for (var j = 0; j < box.length; j++) {
             switch (box[j].attr("dex")) {
                 case "1":
                     box[j].attr({
                         "class": "box2",
                         "dex": "2"
                     });
                     break;
                 case "2":
                     box[j].attr({
                         "class": "box3",
                         "dex": "3"
                     });
                     break;
                 case "3":
                     box[j].attr({
                         "class": "box1",
                         "dex": "1"
                     });
                     break;
             }
         }
     }

     var box1 = new Array();
     for (var i = 0; i < $(".bigbox div").length; i++) {
         box1[i] = $(".bigbox div").eq(i);
     }
     var s;

     function lunbo() {
         qianbo(box1);
         s = setTimeout(lunbo, 3000)
     }
     lunbo();
     $("#zheng").click(function() {
         qianbo(box1);
     });
     $("#fan").click(function() {
         houbo(box1);
     });
     $(".bigbox").hover(function() {
         clearTimeout(s)
     }, function() {
         lunbo();
     });

 })