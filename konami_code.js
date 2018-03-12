const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  document.addEventListener('keydown', konamiEvent);

  function konamiEvent(e) {
    const key = parseInt(e.detail || e.which);

    if (key === konamiCode[index]) {
      index++;

      if (index === konamiCode.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  };
};

init();
