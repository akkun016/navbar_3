$(function() {
  const navBar = $('#navBar');
  const navPosition = navBar.offset().top;

  $(window).on("scroll", function() {
    const scroll = $(window).scrollTop();

    if(scroll >= navPosition) {
      navBar.css({position:'fixed', top:'0'});
    } else  {
      navBar.css({position:'absolute', top:'0'});
    };
  });
});