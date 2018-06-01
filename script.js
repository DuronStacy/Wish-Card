function createBall(left, top, size, color) {
  return $('<div></div>')
    .css("background-color", color)
    .css("left", left)
    .css("top", top)
    .css("width", size)
    .css("height", size)
    .css("border-radius", size / 2);
}

function getRandomColor() {
  return $.Color(getRandomInt(0, 255),
    getRandomInt(0, 255),
    getRandomInt(0, 255)).toHexString();
}

function getRandomBool() {
  return Math.random() >= 0.5;
}

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function getRandomPath($container) {
  // First, we'll decide if the ball should
  // bounce from left to right or right to
  // left.
  var ltr = getRandomBool();
  
  // The diameter will range from 10 to 50 pixels.
  var size = getRandomInt(10, 50);
  
  // We'll return an object with parameters that
  // describe the ball and its bounce.
  return {
    color: getRandomColor(),
    size: size,
    left1: ltr ? -size : $container.width(),
    left2: getRandomInt(0, $container.width() - size),
    top: getRandomInt(-$container.height() * 2,
      $container.height() / 2 - size),
    duration: getRandomInt(500, 2000)
  }
}