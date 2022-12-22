var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

showView(window.location.hash);

window.addEventListener('hashchange', function (event) {
  showView(window.location.hash);
});

function showView(newHash) {

  console.log('newHash:', newHash);

  var route = newHash.startsWith('#') ? newHash.replace('#', '') : newHash;

  console.log('route:', route);

  if (route === '') return;

  for (var tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex].hash === newHash) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }

  for (var viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== route) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
}
