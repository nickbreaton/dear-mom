import $ from 'jquery';

export function debug(config = {}) {
  // skip cover page
  if (config.skipCover) {
    $('#cta').trigger('click');
  }
}
