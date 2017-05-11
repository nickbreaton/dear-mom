import $ from 'jquery';

let image = $('#cover').css('background-image');
image = image.substring(5, image.length - 2);

$('<img/>').attr('src', image).on('load', function () {
  $(this).remove();
  $('body').css('visibility', 'visible');
  console.log('done');
});
