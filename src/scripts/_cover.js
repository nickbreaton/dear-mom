import $ from 'jquery';

$(document).ready(() => {
  document.title = 'Dear Mom';
});

$('#cta').click(() => {
  document.title = 'Tina Breaton | Web Developer';

  // start css lift animation
  $('#cover').addClass('lift');

  // reset the display to CSS provided value
  $('#content').css('display', '');

  // remove from page after lift transition is complete
  const transitionEvents = [
    'transitionend',
    'webkitTransitionEnd',
    'oTransitionEnd',
    'otransitionend',
    'MSTransitionEnd'
  ];
  $('#cover').on(transitionEvents.join(' '), function () {
    $(this).css('display', 'none');
  });
});
