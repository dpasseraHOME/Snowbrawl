var FPS = 6;
var CHAR_NAME_ARR = [	'dante','biko','ken','brittany','chike','charles','brian',
						'nick','leonel','reid','alex','david','eric','jonathan'];
var FRAME_W = 40;
var FRAME_H = 40;

// actions
// row index in sprite sheet
// idle - 11, throw - 5, kick - 13
var ACTION_I = [11, 5, 13];
// number of frames in action
var NUM_ACTION_FRAMES = [3, 3, 6];

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

var actionIndexArr = [];
// current frame index in action
var frameIndexArr = [];
// position of frame in sprite sheet
var frameXPosArr = [];
var frameYPosArr = [];
// position to draw image in char canvas
// currently will always be 0,0, unless I decide to animate position of character by drawing, instead of tweening
var charXPosArr = [];
var charYPosArr = [];

// has a new action been received for this character?
var isPendingActionSwitchArr = [];

$(document).ready(function() {
	initChars();
});

function initChars() {
	canvasBkgd = $('#canvas_bkgd');
	cBkgd = canvasBkgd[0].getContext('2d');

	var len = CHAR_NAME_ARR.length;

	for(var i=0; i<len; i++) {
		// init animation arrays
		actionIndexArr.push(0);
		frameIndexArr.push(0);
		frameXPosArr.push(0);
		frameYPosArr.push(0);
		charXPosArr.push(0);
		charYPosArr.push(0);
		isPendingActionSwitchArr.push(false);

		// set initial animation - idle
		frameYPosArr[i] = ACTION_I[actionIndexArr[0]] * FRAME_H;

		$('#char_'+CHAR_NAME_ARR[i])[0].width = FRAME_W;
		$('#char_'+CHAR_NAME_ARR[i])[0].height = FRAME_H;
		// get 2D contexts of character canvases
		charArr[CHAR_NAME_ARR[i]] = $('#char_'+CHAR_NAME_ARR[i])[0].getContext('2d');
		// load sprite sheets
		sheetArr[CHAR_NAME_ARR[i]] = new Image();
		sheetArr[CHAR_NAME_ARR[i]].onload = function() {
			numSheetsLoaded ++;
			if(numSheetsLoaded >= CHAR_NAME_ARR.length) {
				loop();
				//loopInterval = setInterval(loop, 1000/FPS);
			}
		}
		sheetArr[CHAR_NAME_ARR[i]].src = 'images/sheet_'+CHAR_NAME_ARR[i]+'.gif';
	}
}

function loop() {
	var date = new Date();
	var aDate = date.getTime();

	var len = CHAR_NAME_ARR.length;

	for(var i=0; i<len; i++) {
		charArr[CHAR_NAME_ARR[i]].clearRect(0, 0, FRAME_W, FRAME_H);
		charArr[CHAR_NAME_ARR[i]].drawImage(sheetArr[CHAR_NAME_ARR[i]], // sheet to draw from
											frameXPosArr[i], frameYPosArr[i], // position in sheet to start drawing
											FRAME_W, FRAME_H, // dimensions of to draw from sheet
											charXPosArr[i], charYPosArr[i], // position in canvas to draw
											FRAME_W, FRAME_H); // dimensions to draw in canvas
		//console.log(CHAR_NAME_ARR[i] + " : " + frameXPosArr[i]+","+frameYPosArr[i]+" : "+charXPosArr[i]+","+charYPosArr[i]);
		// update for next frame
		if(isPendingActionSwitchArr[i]) {

		} else {
			if((frameIndexArr[i]+1) >= NUM_ACTION_FRAMES[actionIndexArr[i]]) {
				// if at end of animation, reset
				frameXPosArr[i] = 0;
				frameIndexArr[i] = 0;
			} else {
				// advance frame
				frameXPosArr[i] += FRAME_W;
				frameIndexArr[i] ++;
			}
		}
	}

	// check how long loop has taken and subtract from recursive timeout
	date = new Date();
	bDate = date.getTime();

	setTimeout(loop, 1000/FPS - (bDate - aDate));
}