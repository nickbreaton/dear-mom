import $ from 'jquery';

$(document).ready(() => {
  document.title = 'Dear Mom';
});

$('#cta').click(() => {
  $('#cover').addClass('lift');
  document.title = 'Tina Breaton | Web Developer';
});
