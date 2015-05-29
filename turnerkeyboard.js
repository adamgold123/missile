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
function fire4(){
  setTimeout(function(){ThunderConnector.command('fire');},0);
  setTimeout(function(){ThunderConnector.command('fire');},3500);
  setTimeout(function(){ThunderConnector.command('fire');},7000);
  setTimeout(function(){ThunderConnector.command('fire');},10500);
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
  if (key.name == "w" && key.shift == true) {
    turnUpDegrees(0.5);    
  }
  if (key.name == "a" && key.shift == true) {
    turnLeftDegrees(0.5);
  }
  if (key.name == "s" && key.shift == true) {
    turnDownDegrees(0.5);
  }
  if (key.name == "d" && key.shift == true) {
    turnRightDegrees(0.5);
  }

// if shift is pressed while using W, A, S, D, the launcher will move .5 degrees instead of 2

  if (key.name == "c" && key.ctrl == false) {
    center();
  }
  if (key.name == "f") {
    setTimeout(function(){ThunderConnector.command('fire');},0);
    setTimeout(function(){ThunderConnector.command('stop');},10000);
  }
  if (key.name == "f" && key.shift == true) {
    fire4();
  }

  // if shift is pressed wile using F to fire, the launcher will fire all 4 missiles

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
