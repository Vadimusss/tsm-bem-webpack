/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0cd4096024309055b1d48e7d0647823821d80d5947240f0fff5b2e5e95e532f1&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=true';
  const mapContainer = document.getElementsByClassName('zones__live-map')[0];
  const optionsMap = {
    once: true,
    passive: true,
    capture: true,
  };

  let mapLoaded = false;
  function startLazyMap() {
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.setAttribute('src', apiUrl);
      mapContainer.appendChild(script);
      mapLoaded = true;
    }
  }

  mapContainer.addEventListener('mouseover', startLazyMap, optionsMap);
  mapContainer.addEventListener('touchstart', startLazyMap, optionsMap);
}, false);
