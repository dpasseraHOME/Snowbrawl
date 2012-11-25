var C_W = 640;
var C_H = 480;
var NUM_FRAMES = [3,2,3,3,6];
var FRAME_W = 40;
var FRAME_H = 40;
// walk - 0, run - 3, throw - 5, idle - 11, kick - 13
var ACTION_Y = [0,3,5,11,13];
var FPS = 6;

var canvasBkgd;
var canvasFgd;
var cBkgd;
var cFgd;

var sheet;

// position of frame within sprite sheet
var fXPos = 0;
var fYPos = 0;

var xPos = 0;
var yPos = 0;

var numFrames;

var actionIndex = 0;

var index = 0;

var loopInterval;

var isPendingActionSwitch = false;

$(document).ready(function() {
	initButtons();
	initAnimation();
});

function initButtons() {
	$('button').click(function() {
		startAction($(this).attr('id'));
	});
}

function initAnimation() {
	canvasBkgd = $('#canvas_bkgd');
	canvasFgd = $('#canvas_fgd');

	canvasBkgd[0].width = C_W;
	canvasBkgd[0].height = C_H;
	canvasFgd[0].width = FRAME_W;
	canvasFgd[0].height = FRAME_H;

	cBkgd = canvasBkgd[0].getContext('2d');
	cFgd = canvasFgd[0].getContext('2d');

	// start idle
	actionIndex = 3;

	fYPos = ACTION_Y[actionIndex] * FRAME_H;
	numFrames = NUM_FRAMES[actionIndex];

	sheet = new Image();
	sheet.onload = function() {
		loopInterval = setInterval(loop, 1000/FPS);
	}
	sheet.src = "images/sprite_sheet1.gif";
}

function startAction(buttonIdStr) {

	switch(buttonIdStr) {

		case 'button_walk':
		actionIndex = 0;
		break;

		case 'button_run':
		actionIndex = 1;
		break;

		case 'button_throw':
		actionIndex = 2;
		break;

		case 'button_kick':
		actionIndex = 4;
		break;

	}

	isPendingActionSwitch = true;
}

function loop() {
	cFgd.clearRect(0, 0, C_W, C_H);
	console.log()
	cFgd.drawImage(sheet, fXPos, fYPos, FRAME_W, FRAME_H, xPos, yPos, FRAME_W, FRAME_H);

	fXPos += FRAME_W;

	index ++;

	if(index >= numFrames) {
		fXPos = 0;
		index = 0;
	}

	if(isPendingActionSwitch) {
		clearInterval(loopInterval);
		index = 0;
		fXPos = 0;
		fYPos = ACTION_Y[actionIndex] * FRAME_H;
		numFrames = NUM_FRAMES[actionIndex];
		isPendingActionSwitch = false;
		loopInterval = setInterval(loop, 1000/FPS);
	}
}