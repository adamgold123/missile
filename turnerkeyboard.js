ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
function turnUpDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('up');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
function turnLeftDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('left');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
function turnDownDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('down');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
function turnRightDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('right');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
function center(){
setTimeout(function(){ThunderConnector.command('right');},0);
setTimeout(function(){ThunderConnector.command('down');},6500);
setTimeout(function(){ThunderConnector.command('left');},8000);
setTimeout(function(){ThunderConnector.command('up');},11050);
setTimeout(function(){ThunderConnector.command('stop');},11850);
}

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);


  if (key.name == "w") {
    turnUpDegrees(2.0);    
  }
  if (key.name == "a") {
    turnLeftDegrees(2.0);
  }
  if (key.name == "s") {
    turnDownDegrees(2.0);
  }
  if (key.name == "d") {
    turnRightDegrees(2.0);
  }
  if (key.name == "up") {
    turnUpDegrees(0.5);    
  }
  if (key.name == "left") {
    turnLeftDegrees(0.5);
  }
  if (key.name == "down") {
    turnDownDegrees(0.5);
  }
  if (key.name == "right") {
    turnRightDegrees(0.5);
  }
  if (key.name == "c" && key.ctrl == false) {
    center();
  }

  // if (key.name == "shift" && key.name == "w")
    // {
    //   turnUpDegrees(1);
    // }

  if (key.name == "f" || key.name == "space") {
    // console.log("Fire");
    setTimeout(function(){ThunderConnector.command('fire');},0);
    setTimeout(function(){ThunderConnector.command('stop');},10000);
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
