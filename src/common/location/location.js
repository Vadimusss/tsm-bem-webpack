document.addEventListener('DOMContentLoaded', function () {
  let map_container = document.getElementsByClassName('location__map')[0];
  let options_map = {
    once: true,
    passive: true,
    capture: true
  };

  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let script = document.createElement('script');
      script.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A78a400cbcda7e37b2c9a9ec3c29af9c64501f52042225081143d14e34e2f1be1&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false');
      map_container.appendChild(script);
    }
  }

  map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
}, false);