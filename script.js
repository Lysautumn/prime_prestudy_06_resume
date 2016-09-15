$(document).ready(function() {
  $('.maincontent').hide();
  $('.view').on('click', function() {
    $('.maincontent').fadeIn();
    $('.view').remove();
  });
});
