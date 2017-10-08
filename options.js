(function () {

  const enable = document.getElementById('enable');
  const interval = document.getElementById('interval');

  interval.addEventListener('input', e => {
    const value = e.target.value;
  });

  enable.addEventListener('change', e => {
    const value = e.target.checked;
  });

})();