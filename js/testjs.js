$(document).ready(function(){

  // Cache selectors
  var lastId;
  topMenu = $("#nav-bar");
  topMenuHeight = topMenu.outerHeight()+1;

  // All list items
  menuItems = $(".nav-link");
  console.log($(".nav-link[href='#about']"));

  // Anchors corresponding to menu items
  scrollItems = $(menuItems).map(function(){
    var item = $($(this).attr("href"));
     if (item.length) { return item; }
  });
  //scrollItems = menuItems.map(function(){
  //  return this.href;
  //});

  // Make the menu item "active" if clicked
  menuItems.click(function(){
    menuItems.removeClass("active")
    $(this).addClass("active")
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;
     //console.log(fromTop)
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.removeClass("active");
        $(".nav-link[href='#"+id+"']").addClass("active");
     }
  });
});
