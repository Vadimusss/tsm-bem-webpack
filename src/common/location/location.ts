/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.querySelector('.location__map');
  const optionsMap = {
    once: true,
    passive: true,
    capture: true,
  };

  let mapNotLoaded = true;
  function startLazyMap() {
    if (mapNotLoaded && mapContainer) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A78a400cbcda7e37b2c9a9ec3c29af9c64501f52042225081143d14e34e2f1be1&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false');
      mapContainer.appendChild(script);
      mapNotLoaded = false;
      mapContainer.removeEventListener('mouseover', startLazyMap, optionsMap);
      mapContainer.removeEventListener('touchstart', startLazyMap, optionsMap);
    }
  }
  if (mapContainer) {
    mapContainer.addEventListener('mouseover', startLazyMap, optionsMap);
    mapContainer.addEventListener('touchstart', startLazyMap, optionsMap);
  }
}, false);
