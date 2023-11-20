/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('gaz-map');

  let mapLoaded = false;
  function startLazyMap() {
    if (!mapLoaded) {
      const ymapApiScript = document.createElement('script');
      const ymapInit = document.createElement('script');
      ymapApiScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=e2e62a8f-7129-4dfb-8886-eecaeee7ffec');
      setTimeout(() => {
        ymapInit.setAttribute('src', '/assets/templates/TSM-COMPANY_NEW/maintenance/maintenance-header__yamap.js');
      }, 500);
      mapContainer.appendChild(ymapApiScript);
      mapContainer.appendChild(ymapInit);
      mapLoaded = true;
      mapContainer.removeEventListener('mouseover', startLazyMap);
      mapContainer.removeEventListener('touchstart', startLazyMap);
    }
  }

  if (mapContainer) {
    mapContainer.addEventListener('mouseover', startLazyMap);
    mapContainer.addEventListener('touchstart', startLazyMap);
  }
}, false);
