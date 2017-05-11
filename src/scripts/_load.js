import $ from 'jquery';

let image = $('#cover').css('background-image');
image = image.replace(/.*(?=http)/, '');
image = image.replace(/[^A-Za-z]*$/, '');
console.log(image);

$('<img/>').attr('src', image).on('load', function () {
  $(this).remove();
  $('body').css('visibility', 'visible');
  console.log('done');
});
