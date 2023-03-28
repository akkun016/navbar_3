$(function() {
  const navBar = $('#navBar');
  const navPosition = navBar.offset().top;
  let scroll = 0;

  $(window).on("scroll", function() {
    scroll = $(window).scrollTop();

    if(scroll >= navPosition) {
      navBar.css({position:'fixed', top:'0'});
    } else  {
      navBar.css({position:'absolute', top:'0'});
    };
  });
});