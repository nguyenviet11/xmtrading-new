document.addEventListener('DOMContentLoaded', function () {

  function numberWithCommas(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  function displayJSONData(jsonData) {
    jsonData.forEach(item => {
      const dataIdPrefix = item['Data-ID'];
      Object.keys(item).forEach(key => {
        if (key !== 'Data-ID') {
          const value = item[key];
          const formattedValue = isNaN(value) ? value : numberWithCommas(value);
          const dataId = `${dataIdPrefix}-${key}`;
          const targetElements = document.querySelectorAll(`[data-id="${dataId}"]`);

          targetElements.forEach(el => {
            el.textContent = formattedValue;
          });
        }
      });
    });
  }

  fetch('/common/csv/data.json')
    .then(response => response.json())
    .then(jsonData => {
      displayJSONData(jsonData);
    })
    .catch(error => console.error('Error loading JSON data:', error));
});