
function changeColor() {
  var rc = getRandomColor();
  document.body.style.backgroundColor = rc;
}

function getRandomColor() {
  var l = '0123456789ABCDEF';
  var c = '#';
  for (var i = 0; i < 6; i++) {
    c += l[Math.floor(Math.random() * 16)];
  }
  return c;
}
