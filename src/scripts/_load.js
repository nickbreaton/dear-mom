import $ from 'jquery';

let image = $('#cover').css('background-image');
image = image.replace(/.*(?=http)/, '');
image = image.replace(/[^A-Za-z]*$/, '');

$('<img/>').attr('src', image).on('load', function () {
  $(this).remove();
  $('section').css('visibility', 'visible');
  $('#spinner').css('display', 'none');
});
