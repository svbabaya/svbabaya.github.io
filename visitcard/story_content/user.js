function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jsD8Q71pTm":
        Script1();
        break;
      case "6CJkcBt7EDi":
        Script2();
        break;
      case "5VWfMg0yRJc":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var start = new Date().getTime();
player.SetVar('startTime', start);

}

function Script2()
{
  var player = GetPlayer();

let latArray = ['N', 'S'];
let longArray = ['E', 'W'];

var latLet = latArray[getRndInt(0, 1)];
var longLet = longArray[getRndInt(0, 1)];

var latDeg = getRndInt(0, 90000000);
latDeg = String(latDeg / 1000000);
var longDeg = getRndInt(0, 180000000);
longDeg = String(longDeg / 1000000);

player.SetVar('latLetter', latLet);
player.SetVar('latDegrees', latDeg);
player.SetVar('longLetter', longLet);
player.SetVar('longDegrees', longDeg);

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
}

function Script3()
{
  var player = GetPlayer();
var stop = new Date().getTime();
var start = player.GetVar('startTime');

var learnTimeSec = Math.floor((stop - start) / 1000);

player.SetVar('learnTime', learnTimeSec);
}

