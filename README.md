canvasImage
===========

Easing the drawImage() and rotation of images in CANVAS

Usage:

<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>imageLoader Demo</title>
	<script src="imageLoader.js"></script>
    	
</head>
<body>
	<canvas id="display" width="300" height="300" style="border:1px solid black;"></canvas>
    <script>
        var canvas = document.getElementById("display"),
            frame = canvas.getContext("2d");          
        var shipInfo = {center:[45, 45], size:[90, 90],radius: 35,angle:45},
            shipImage = new Image(),
            pos=[canvas.width/2,canvas.height/2];
        shipImage.src = "double_ship.png";
		function draw(){

            frame.draw_image(shipImage,shipInfo.center,shipInfo.size,pos,shipInfo.size);
        }

		window.onload = function(){
            draw();
        };
	</script>
</body>
</html>

