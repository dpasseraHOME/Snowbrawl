var C_W = 640;
var C_H = 480;
var NUM_FRAMES = 5;
var FRAME_W = 33;
var FRAME_H = 44;
var FPS = 12;

var canvasBkgd;
var canvasFgd;
var cBkgd;
var cFgd;

var sheet;

var fXPos = 0;
var fYPos = 40;

var xPos = 0;
var yPos = 0;

var index = 0;

$(document).ready(function() {
	init();
});

function init() {
	canvasBkgd = $('#canvas_bkgd');
	canvasFgd = $('#canvas_fgd');

	canvasBkgd[0].width = C_W;
	canvasBkgd[0].height = C_H;
	canvasFgd[0].width = C_W;
	canvasFgd[0].height = C_H;

	cBkgd = canvasBkgd[0].getContext('2d');
	cFgd = canvasFgd[0].getContext('2d');

	sheet = new Image();
	sheet.onload = function() {
		setInterval(loop, 1000/FPS);
	}
	sheet.src = "images/sprite_sheet1.gif";
}

function loop() {
	cFgd.clearRect(0, 0, C_W, C_H);
	cFgd.drawImage(sheet, fXPos, fYPos, FRAME_W, FRAME_H, xPos, yPos, FRAME_W, FRAME_H);

	fXPos += FRAME_W;

	index ++;

	if(index > NUM_FRAMES) {
		fXPos = 0;
		index = 0;
	}
}