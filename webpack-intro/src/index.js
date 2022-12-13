const $ = require('jquery');

function updateHeading($h1) {
  if ($h1.is('[webpack]')) {
    $h1.removeAttr('webpack');
    $h1.text('Hello, World!');
  } else {
    $h1.attr('webpack', true);
    $h1.text('Hello, Webpack!');
  }
}

setInterval(updateHeading, 1000, $('#hello-world'));
