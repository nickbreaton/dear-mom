import $ from 'jquery';

$('<img/>').attr('src', './background.jpg').on('load', function () {
  // remove listener to avoid memory leaks
  $(this).remove();

  // add the loaded image as the CSS background image
  $('#cover')
    .css('display', '')
    .css('background-image', `url(${this.src})`);

  // disable the spinner
  $('#spinner').css('display', 'none');
});
