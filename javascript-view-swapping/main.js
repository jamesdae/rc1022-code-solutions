
var tabContain = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab'); // Node List for .tab elements
var $view = document.querySelectorAll('.view'); // Node List for .view elements

tabContain.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    var tabData = event.target.getAttribute('data-view');

    for (var j = 0; j < $view.length; j++) {
      if (tabData === $view[j].getAttribute('data-view')) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
});
