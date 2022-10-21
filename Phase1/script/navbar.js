$( document ).ready(function() {
    $(".c-able").mouseover(function() {
      $(this).css("background-color", "#9999ff");
    });
    $(".c-able").mouseout(function() {
      $(this).css("background-color", "#66ffff");
    });
    $(".c-able").click(function() {
        var newlink = ("http://127.0.0.1:5500/0"+($(this).index()+1)+"%20"+$(this).text()+".html");
        location.replace(newlink);
    });
  }); 