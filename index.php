<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
	
	<meta charset="utf-8" />
	<title>Smashing Boxes Snowbrawl</title>

	<!-- <link rel="stylesheet" href="css/main.css" /> -->
	<link rel="stylesheet" href="css/style.css" />

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>
	<!--[if IE]> <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

</head>

<body>

	<canvas id="canvas_bkgd"></canvas>

	<canvas class="char" id="char_dante"></canvas>
	<canvas class="char" id="char_biko"></canvas>
	<canvas class="char" id="char_ken"></canvas>
	<canvas class="char" id="char_brittany"></canvas>
	<canvas class="char" id="char_chike"></canvas>
	<canvas class="char" id="char_charles"></canvas>
	<canvas class="char" id="char_brian"></canvas>

	<canvas class="char" id="char_nick"></canvas>
	<canvas class="char" id="char_leonel"></canvas>
	<canvas class="char" id="char_reid"></canvas>
	<canvas class="char" id="char_alex"></canvas>
	<canvas class="char" id="char_eric"></canvas>
	<canvas class="char" id="char_david"></canvas>
	<canvas class="char" id="char_jonathan"></canvas>

	<div>
		<select id="char_select">
			<option value="dante">Dante</option>
			<option value="biko">Biko</option>
			<option value="ken">Ken</option>
			<option value="brittany">Brittany</option>
			<option value="chike">Chike</option>
			<option value="charles">Charles</option>
			<option value="brian">Brian</option>
			<option value="nick">Nick</option>
			<option value="leonel">Leonel</option>
			<option value="reid">Reid</option>
			<option value="alex">Alex</option>
			<option value="david">David</option>
			<option value="eric">Eric</option>
			<option value="jonathan">Jonathan</option>
		</select>
	</div>

	<div id="buttons_container">
		<button onclick="onClick_action('idle')">Idle</button>
		<button onclick="onClick_action('throw')">Throw</button>
		<button onclick="onClick_action('kick')">Kick</button>
	</div>

</body>

</html>