// size container to window
$(document).ready(function() {
  $(window).resize(function() {
      $('').height($(window).height() - 20); // add container class in first brackets
      $('').width($(window).width() - 20);   // add container class in first brackets
  });

  $(window).trigger('resize');
});