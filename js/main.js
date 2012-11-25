var FPS = 6;
var CHAR_NAME_ARR = [	'dante','biko','ken','brittany','chike','charles','brian',
						'nick','leonel','reid','alex','david','eric','jonathan'];
var FRAME_W = 40;
var FRAME_H = 40;

var canvasBkgd;
var cBkgd;
// "associative array" of character canvas elements
var canvasCharArr = new Object();
// "associative array" of character canvas contexts
var charArr = new Object();
// "associative array" of character sprite sheets
var sheetArr = new Object();

var numSheetsLoaded = 0;

var loopInterval;

$(document).ready(function() {
	initChars();
});

function initChars() {
	canvasBkgd = $('#canvas_bkgd');
	cBkgd = canvasBkgd[0].getContext('2d');

	var len = CHAR_NAME_ARR.length;

	for(var i=0; i<len; i++) {
		// get 2D contexts of character canvases
		charArr[CHAR_NAME_ARR[i]] = $('#char_'+CHAR_NAME_ARR[i])[0].getContext('2d');
		// load sprite sheets
		sheetArr[CHAR_NAME_ARR[i]] = new Image();
		sheetArr[CHAR_NAME_ARR[i]].onload = function() {
			numSheetsLoaded ++;
			if(numSheetsLoaded >= CHAR_NAME_ARR.length) {
				//loopInterval = setInterval(loop, 1000/FPS);
				displaySprites();
			}
		}
		sheetArr[CHAR_NAME_ARR[i]].src = 'images/sheet_'+CHAR_NAME_ARR[i]+'.gif';
	}
}

function displaySprites() {
	var len = CHAR_NAME_ARR.length;

	for(var i=0; i<len; i++) {
		charArr[CHAR_NAME_ARR[i]].drawImage(sheetArr[CHAR_NAME_ARR[i]], 0, 0, FRAME_W, FRAME_H, 0, 0, FRAME_W, FRAME_H);
	}
}

function loop() {
	
}