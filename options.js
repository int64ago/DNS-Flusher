(function () {

  if (!chrome.benchmarking) {
    location.href = 'https://goo.gl/vSh9im';
  }

  const enable = document.getElementById('enable');
  const interval = document.getElementById('interval');

  const options = {
    enable: localStorage.getItem('auto.refresh.enable') === 'true',
    interval: (localStorage.getItem('auto.refresh.interval') || 0) / 1,
  };

  enable.checked = options.enable;
  interval.value = options.interval;

  interval.addEventListener('input', e => {
    const value = e.target.value;
    options.interval = value;
    localStorage.setItem('auto.refresh.interval', value);
    setting();
  });

  enable.addEventListener('change', e => {
    const value = e.target.checked;
    options.enable = value;
    localStorage.setItem('auto.refresh.enable', value);
    setting();
  });

  function setting() {
    chrome.runtime.sendMessage(options, resp => {
      console.log(options);
    });
  }

})();