missile = require("./index");
missile.turnLeftDegrees();
missile.turnRightDegrees();
async = require("async");

async.series([
missile.turnLeftDegrees(),
missile.turnRightDegrees()
]);
